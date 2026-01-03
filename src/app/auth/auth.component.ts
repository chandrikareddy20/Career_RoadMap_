import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../services/validation.service';
import { FirestoreService } from '../services/firestore.service';
import { NotificationService } from '../services/notification.service';
import { auth } from '../firebase-init';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLogin = true; // Default to login mode
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private validationService: ValidationService,
    private firestoreService: FirestoreService,
    private notificationService: NotificationService
  ) {}

  toggleMode(mode: string) {
    this.isLogin = mode === 'login';
    // Only reset fullName when switching to login (keep email/password for convenience)
    if (this.isLogin) {
      this.fullName = '';
    }
  }

  async onSubmit(form?: NgForm) {
    // Safety: if form is provided and invalid, show a message
    if (form && form.invalid) {
      this.validationService.showAlert('Please fix the errors in the form before submitting.');
      return;
    }

    // Keep existing programmatic validations as a fallback
    if (!this.validationService.validateEmail(this.email)) {
      this.validationService.showAlert('Please enter a valid email address.');
      return;
    }

    if (!this.validationService.validatePassword(this.password)) {
      this.validationService.showAlert('Password must be at least 6 characters long.');
      return;
    }

    // For login mode: verify user exists
    if (this.isLogin) {
      const profileKey = `profile_${this.email}`;
      const storedProfile = localStorage.getItem(profileKey);
      if (!storedProfile) {
        this.validationService.showAlert('No account found with this email. Please register first.');
        return;
      }
    }

    if (!this.isLogin && !this.validationService.validateRequired(this.fullName)) {
      this.validationService.showAlert('Please enter your full name.');
      return;
    }
    if (!this.isLogin && !this.validationService.validateMaxLength(this.fullName, 100)) {
      this.validationService.showAlert('Full name is too long (max 100 characters).');
      return;
    }

    // Persist a minimal profile for this email when registering
    try {
      if (!this.isLogin) {
        const profileKey = `profile_${this.email}`;
        const profile = { fullName: this.fullName, email: this.email, password: this.password };
        localStorage.setItem(profileKey, JSON.stringify(profile));
      } else {
        // For login: verify password matches (basic check)
        const profileKey = `profile_${this.email}`;
        const storedProfile = localStorage.getItem(profileKey);
        if (storedProfile) {
          try {
            const parsed = JSON.parse(storedProfile);
            if (parsed.password && parsed.password !== this.password) {
              this.validationService.showAlert('Invalid email or password.');
              return;
            }
          } catch (e) {
            // If password wasn't stored before, allow login (backward compatibility)
          }
        }
      }

      // Determine a display name for the welcome message (prefer provided fullName, then stored profile, then email local-part)
      let displayName = this.fullName;
      if (!displayName) {
        try {
          const stored = localStorage.getItem(`profile_${this.email}`);
          if (stored) {
            const parsed = JSON.parse(stored);
            displayName = parsed?.fullName || '';
          }
        } catch (e) {
          displayName = '';
        }
      }
      if (!displayName) {
        displayName = (this.email || '').split('@')[0] || 'User';
      }

      // Set persistent marker that this email has logged in before, and place a one-time session welcome message
      const seenKey = `hasLoggedIn_${this.email}`;
      const hadLoggedInBefore = !!localStorage.getItem(seenKey);
      if (!hadLoggedInBefore) {
        // first time
        sessionStorage.setItem('welcomeMessage', `Welcome to our website, ${displayName}!`);
        try { localStorage.setItem(seenKey, 'true'); } catch (e) {}
      } else {
        sessionStorage.setItem('welcomeMessage', `Welcome back, ${displayName}!`);
      }

      // Store current user for dashboard to pick up
      try { localStorage.setItem('currentUser', JSON.stringify({ fullName: displayName, email: this.email })); } catch (e) {}

      // Also persist/update the user in Firestore (use a safe doc id derived from email)
      try {
        const uid = encodeURIComponent(this.email || 'unknown');
        await this.firestoreService.createOrUpdateUser(uid, { email: this.email, displayName, firstTime: !hadLoggedInBefore });
      } catch (e) {
        // ignore firestore errors during auth flow
      }

    } catch (e) {
      // ignore storage errors
    }

    this.router.navigate(['/dashboard']);
  }

  async loginWithGoogle() {
    if (!auth) {
      this.validationService.showAlert('Google authentication is not available. Please use email and password.');
      return;
    }

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Extract user information
      const email = user.email || '';
      const displayName = user.displayName || user.email?.split('@')[0] || 'User';

      // Store user information in localStorage (for compatibility with existing system)
      try {
        const profileKey = `profile_${email}`;
        const existingProfile = localStorage.getItem(profileKey);
        if (!existingProfile) {
          // First time Google login - create profile
          const profile = { fullName: displayName, email: email, googleAuth: true };
          localStorage.setItem(profileKey, JSON.stringify(profile));
        }

        // Set welcome message
        const seenKey = `hasLoggedIn_${email}`;
        const hadLoggedInBefore = !!localStorage.getItem(seenKey);
        if (!hadLoggedInBefore) {
          sessionStorage.setItem('welcomeMessage', `Welcome to our website, ${displayName}!`);
          localStorage.setItem(seenKey, 'true');
        } else {
          sessionStorage.setItem('welcomeMessage', `Welcome back, ${displayName}!`);
        }

        // Store current user
        localStorage.setItem('currentUser', JSON.stringify({ fullName: displayName, email: email }));

        // Update Firestore
        try {
          const uid = user.uid || encodeURIComponent(email);
          await this.firestoreService.createOrUpdateUser(uid, {
            email: email,
            displayName,
            firstTime: !hadLoggedInBefore
          });
        } catch (e) {
          console.warn('Firestore update failed', e);
        }

        // Navigate to dashboard
        this.router.navigate(['/dashboard']);
      } catch (e) {
        console.error('Error storing user data', e);
        this.notificationService.error('Login successful but failed to save user data. Please try again.');
      }
    } catch (error: any) {
      console.error('Google login error', error);
      if (error.code === 'auth/popup-closed-by-user') {
        // User closed the popup - don't show error
        return;
      }
      this.notificationService.error('Failed to login with Google. Please try again or use email and password.');
    }
  }
}
