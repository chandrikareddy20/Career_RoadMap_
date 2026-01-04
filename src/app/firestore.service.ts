import { Injectable } from '@angular/core';
import { db } from '../firebase-init';
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  // create or update a user document using a provided uid
  async createOrUpdateUser(uid: string, data: { email: string; displayName?: string; firstTime?: boolean }) {
    if (!db) return;
    try {
      const ref = doc(db, 'users', uid);
      await setDoc(ref, {
        uid,
        email: data.email,
        displayName: data.displayName || null,
        firstTime: data.firstTime ?? false,
        skills: [],
        goals: null,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp()
      }, { merge: true });
    } catch (e) {
      console.warn('Firestore createOrUpdateUser failed', e);
    }
  }

  async updateLastLogin(uid: string) {
    if (!db) return;
    try {
      const ref = doc(db, 'users', uid);
      await updateDoc(ref, { lastLogin: serverTimestamp(), firstTime: false });
    } catch (e) {
      // ignore
    }
  }

  // create a roadmap
  async createRoadmap(ownerUid: string, roadmap: { title: string; skillsRequired?: string[]; steps?: any[] }) {
    if (!db) return null;
    try {
      const cRef = collection(db, 'roadmaps');
      const docRef = await addDoc(cRef, {
        owner: ownerUid,
        title: roadmap.title,
        skillsRequired: roadmap.skillsRequired || [],
        steps: roadmap.steps || [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (e) {
      console.warn('createRoadmap failed', e);
      return null;
    }
  }

  // optional: record activity under users/{uid}/activity
  async recordActivity(uid: string, activity: { type: string; payload?: any }) {
    if (!db) return;
    try {
      const c = collection(db, `users/${uid}/activity`);
      await addDoc(c, { ...activity, createdAt: serverTimestamp() });
    } catch (e) {
      console.warn('recordActivity failed', e);
    }
  }

  async submitFeedback(uid: string | null, text: string) {
    if (!db) return;
    try {
      const c = collection(db, 'feedback');
      await addDoc(c, { uid: uid || null, text, createdAt: serverTimestamp() });
    } catch (e) {
      console.warn('submitFeedback failed', e);
    }
  }
}
