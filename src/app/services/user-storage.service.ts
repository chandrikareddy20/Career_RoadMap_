import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStorageService {
  private getUserId(): string | null {
    try {
      const rawUser = localStorage.getItem('currentUser');
      if (rawUser) {
        const user = JSON.parse(rawUser);
        return user?.email || null;
      }
    } catch (e) {
      console.error('Error getting user ID', e);
    }
    return null;
  }

  private getUserKey(key: string): string {
    const userId = this.getUserId();
    if (!userId) {
      // Fallback to global key if no user is logged in (shouldn't happen in normal flow)
      return key;
    }
    // Use email as part of the key, encode it to be safe for localStorage keys
    const encodedEmail = encodeURIComponent(userId);
    return `${encodedEmail}_${key}`;
  }

  // Generic get/set methods
  getItem(key: string): string | null {
    const userKey = this.getUserKey(key);
    return localStorage.getItem(userKey);
  }

  setItem(key: string, value: string): void {
    const userKey = this.getUserKey(key);
    try {
      localStorage.setItem(userKey, value);
    } catch (e) {
      console.error(`Error setting ${key}`, e);
    }
  }

  removeItem(key: string): void {
    const userKey = this.getUserKey(key);
    try {
      localStorage.removeItem(userKey);
    } catch (e) {
      console.error(`Error removing ${key}`, e);
    }
  }

  // Convenience methods for common data types
  getJSON<T>(key: string, defaultValue: T): T {
    try {
      const item = this.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item) as T;
    } catch (e) {
      console.error(`Error parsing JSON for ${key}`, e);
      return defaultValue;
    }
  }

  setJSON(key: string, value: any): void {
    try {
      this.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error stringifying JSON for ${key}`, e);
    }
  }

  // Specific methods for app data
  getSavedRoadmaps(): any[] {
    return this.getJSON('savedRoadmaps', []);
  }

  setSavedRoadmaps(roadmaps: any[]): void {
    this.setJSON('savedRoadmaps', roadmaps);
  }

  getActiveRoadmapId(): string | null {
    return this.getItem('activeRoadmapId');
  }

  setActiveRoadmapId(id: string | null): void {
    if (id) {
      this.setItem('activeRoadmapId', id);
    } else {
      this.removeItem('activeRoadmapId');
    }
  }

  getRoadmapSummary(): any | null {
    return this.getJSON('roadmapSummary', null);
  }

  setRoadmapSummary(summary: any): void {
    this.setJSON('roadmapSummary', summary);
  }

  getCompletionEvents(): any[] {
    return this.getJSON('completionEvents', []);
  }

  addCompletionEvent(event: any): void {
    const events = this.getCompletionEvents();
    events.push(event);
    this.setJSON('completionEvents', events);
  }

  getQuizAttempts(): any[] {
    return this.getJSON('quizAttempts', []);
  }

  addQuizAttempt(attempt: any): void {
    const attempts = this.getQuizAttempts();
    attempts.push(attempt);
    this.setJSON('quizAttempts', attempts);
  }

  getBadges(): any[] {
    return this.getJSON('badges', []);
  }

  setBadges(badges: any[]): void {
    this.setJSON('badges', badges);
  }

  getUserSkills(): any[] {
    return this.getJSON('userSkills', []);
  }

  setUserSkills(skills: any[]): void {
    this.setJSON('userSkills', skills);
  }

  getUserInterests(): string[] {
    return this.getJSON('userInterests', []);
  }

  setUserInterests(interests: string[]): void {
    this.setJSON('userInterests', interests);
  }

  getDailyGoals(): any[] {
    return this.getJSON('dailyGoals', []);
  }

  setDailyGoals(goals: any[]): void {
    this.setJSON('dailyGoals', goals);
  }
}

