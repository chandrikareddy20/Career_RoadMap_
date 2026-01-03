import { initializeApp, FirebaseApp, getApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from '../environments/firebase';

let app: FirebaseApp | null = null;
try {
  // initialize once
  if (!getApps().length) {
    app = initializeApp(firebaseConfig as any);
  } else {
    app = getApp();
  }
} catch (e) {
  // ignore initialization errors in environments without config
  app = null;
}

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

/**
 * Browser migration helper: reads localStorage keys used by the app and writes them to Firestore.
 * Usage (in browser console after the app is running and firebase config is set):
 *   await runLocalStorageMigration();
 * Optionally pass an explicit ownerUid: await runLocalStorageMigration('user%40example.com');
 */
export async function runLocalStorageMigration(ownerUid?: string) {
  if (!db) {
    throw new Error('Firestore not initialized (check firebaseConfig in src/environments/firebase.ts)');
  }

  // derive uid from parameter or from localStorage.currentUser
  let uid = ownerUid || null;
  if (!uid) {
    try {
      const raw = localStorage.getItem('currentUser');
      if (raw) {
        const parsed = JSON.parse(raw);
        uid = encodeURIComponent(parsed.email || parsed.uid || 'unknown');
      }
    } catch (e) {
      uid = 'unknown';
    }
  }
  if (!uid) uid = 'unknown';

  const result: any = { roadmaps: 0, completionEvents: 0, quizAttempts: 0, badges: 0 };

  // Migrate savedRoadmaps -> roadmaps collection
  try {
    const raw = localStorage.getItem('savedRoadmaps') || '[]';
    const arr = JSON.parse(raw);
    for (const r of arr) {
      const docData: any = {
        owner: uid,
        title: r.name || r.title || 'Untitled Roadmap',
        skillsRequired: r.skills || [],
        steps: r.roadmapLevels || [],
        certifications: r.certifications || [],
        projectIdeas: r.projectIdeas || [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      try {
        await addDoc(collection(db, 'roadmaps'), docData);
        result.roadmaps++;
      } catch (e) {
        // try fallback setDoc
        try {
          const d = doc(collection(db, 'roadmaps'));
          await setDoc(d, docData);
          result.roadmaps++;
        } catch (err) {
          console.warn('Failed to write roadmap', err);
        }
      }
    }
  } catch (e) {
    console.warn('No savedRoadmaps to migrate', e);
  }

  // Migrate completionEvents -> users/{uid}/activity
  try {
    const raw = localStorage.getItem('completionEvents') || '[]';
    const arr = JSON.parse(raw);
    for (const e of arr) {
      try {
        await addDoc(collection(db, `users/${uid}/activity`), { type: 'completion', payload: e, createdAt: serverTimestamp() });
        result.completionEvents++;
      } catch (err) {
        console.warn('Failed to write completion event', err);
      }
    }
  } catch (e) {
    console.warn('No completionEvents to migrate', e);
  }

  // Migrate quizAttempts -> users/{uid}/activity
  try {
    const raw = localStorage.getItem('quizAttempts') || '[]';
    const arr = JSON.parse(raw);
    for (const q of arr) {
      try {
        await addDoc(collection(db, `users/${uid}/activity`), { type: 'quizAttempt', payload: q, createdAt: serverTimestamp() });
        result.quizAttempts++;
      } catch (err) {
        console.warn('Failed to write quiz attempt', err);
      }
    }
  } catch (e) {
    console.warn('No quizAttempts to migrate', e);
  }

  // Migrate badges -> users/{uid}/badges
  try {
    const raw = localStorage.getItem('badges') || '[]';
    const arr = JSON.parse(raw);
    for (const b of arr) {
      try {
        await addDoc(collection(db, `users/${uid}/badges`), { ...b, createdAt: serverTimestamp() });
        result.badges++;
      } catch (err) {
        console.warn('Failed to write badge', err);
      }
    }
  } catch (e) {
    console.warn('No badges to migrate', e);
  }

  console.info('Migration complete', result);
  return result;
}

// expose helper on window for easy running from browser console
try {
  (window as any).runLocalStorageMigration = runLocalStorageMigration;
} catch (e) {}
