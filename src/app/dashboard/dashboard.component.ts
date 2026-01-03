import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserStorageService } from '../services/user-storage.service';
import { AchievementGalleryComponent } from '../components/achievement-gallery/achievement-gallery.component';
import { ProjectGeneratorComponent } from '../components/project-generator/project-generator.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, FormsModule, AchievementGalleryComponent, ProjectGeneratorComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName = 'chandu';
  welcomeMessage: string | null = null;
  badges: Array<{ id: string; title: string; description?: string; earnedAt?: string }> = [];
  overallProgress: number = 0;
  skillsCompleted: number = 0;
  careerGoal: string = 'Not Set';
  estimatedTime: string = 'N/A';
  hasRoadmap: boolean = false;
  isFirstLogin: boolean = false;
  savedRoadmaps: any[] = [];
  activeRoadmapId: string | null = null;
  // modal state for delete confirmation
  showDeleteModal: boolean = false;
  deleteTargetId: string | null = null;
  deleteTargetName: string = '';
  // All courses modal state
  showCoursesModal: boolean = false;
  coursesList: Array<{ title: string; url?: string; type?: string; source?: string }> = [];

  // Daily goals state
  dailyGoals: Array<{ id: string; text: string; completed: boolean; createdAt: string }> = [];
  newGoalText: string = '';
  showAddGoal: boolean = false;

  // Project generator data
  currentUserSkills: Array<{ name: string; level: string }> = [];

  constructor(
    private router: Router,
    private userStorage: UserStorageService
  ) {}

  ngOnInit(): void {
    // Load current user (set by auth component) and any one-time welcome message
    try {
      const rawUser = localStorage.getItem('currentUser');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        if (u?.fullName) this.userName = u.fullName;
      }
      const msg = sessionStorage.getItem('welcomeMessage');
      if (msg) {
        this.welcomeMessage = msg;
        try { sessionStorage.removeItem('welcomeMessage'); } catch (e) {}
      }
    } catch (e) {
      // ignore
    }
    // load persisted roadmap summary if available
    try {
      const summary = this.userStorage.getRoadmapSummary();
      if (summary) {
        this.careerGoal = summary.careerTitle || this.careerGoal;
        this.estimatedTime = summary.estimatedTime || this.estimatedTime;
        this.overallProgress = summary.progress || 0;
        this.skillsCompleted = summary.skillsCompleted || 0;
        this.hasRoadmap = true;
      }
      // load saved roadmaps list and active id
      this.savedRoadmaps = this.userStorage.getSavedRoadmaps();
      this.activeRoadmapId = this.userStorage.getActiveRoadmapId();
      
      // Load user skills for project generator
      this.currentUserSkills = this.userStorage.getUserSkills();
      if (!this.currentUserSkills || this.currentUserSkills.length === 0) {
        // Fallback to currentSkills from localStorage
        try {
          const saved = this.userStorage.getItem('currentSkills');
          if (saved) {
            this.currentUserSkills = JSON.parse(saved);
          }
        } catch (e) {
          this.currentUserSkills = [];
        }
      }
      
      // determine if this is the user's first login / first time seeing dashboard
      const seenKey = `seenDashboard_${this.userName}`;
      const seen = this.userStorage.getItem(seenKey);
      if (!seen) {
        this.isFirstLogin = true;
      }
      // load badges: prefer persisted badges, otherwise compute from events / quiz attempts
      const persisted = this.userStorage.getBadges();
      if (persisted && persisted.length) {
        this.badges = persisted;
      } else {
        this.loadBadges();
      }
      // load daily goals
      this.loadDailyGoals();
    } catch (e) {
      // ignore
    }
  }

  // Load or compute badges from stored events
  loadBadges() {
    try {
      const events = this.userStorage.getCompletionEvents();
      const quizzes = this.userStorage.getQuizAttempts();

      const earned = new Map<string, { id: string; title: string; description?: string; earnedAt: string }>();

      // Early Bird: any completion before 9 AM local time
      for (const e of events) {
        const d = new Date(e.at);
        const h = d.getHours();
        if (h < 9) {
          earned.set('early-bird', { id: 'early-bird', title: 'Early Bird', description: 'Completed a task before 9 AM', earnedAt: e.at });
          break;
        }
      }

      // Night Owl: any completion after 10 PM
      for (const e of events) {
        const d = new Date(e.at);
        const h = d.getHours();
        if (h >= 22) {
          earned.set('night-owl', { id: 'night-owl', title: 'Night Owl', description: 'Completed a task after 10 PM', earnedAt: e.at });
          break;
        }
      }

      // Fast Learner: finished 3 skills in one calendar day
      const byDay = new Map<string, number>();
      for (const e of events) {
        const d = new Date(e.at);
        const day = d.toISOString().slice(0, 10);
        byDay.set(day, (byDay.get(day) || 0) + 1);
        if ((byDay.get(day) || 0) >= 3) {
          earned.set('fast-learner', { id: 'fast-learner', title: 'Fast Learner', description: 'Finished 3 skills in 1 day', earnedAt: e.at });
        }
      }

      // Quiz Master: any quiz attempt with 100%
      for (const q of quizzes) {
        if (q.score === 100) {
          earned.set('quiz-master', { id: 'quiz-master', title: 'Quiz Master', description: 'Scored 100% in a quiz', earnedAt: q.at });
          break;
        }
      }

      // Merge into badges array and persist
      this.badges = Array.from(earned.values()).map(b => ({ id: b.id, title: b.title, description: b.description, earnedAt: b.earnedAt }));
      this.userStorage.setBadges(this.badges);
    } catch (e) {
      this.badges = [];
    }
  }

  // open confirmation modal for deleting a saved roadmap
  openDeleteModal(id: string) {
    this.deleteTargetId = id;
    const target = this.savedRoadmaps.find(r => r.id === id);
    this.deleteTargetName = target?.name || 'this roadmap';
    this.showDeleteModal = true;
  }

  // cancel deletion
  cancelDelete() {
    this.showDeleteModal = false;
    this.deleteTargetId = null;
    this.deleteTargetName = '';
  }

  // confirm deletion from modal
  confirmDelete() {
    if (this.deleteTargetId) {
      this.deleteSavedRoadmap(this.deleteTargetId);
    }
    this.cancelDelete();
  }

  // Activate a roadmap without navigating
  activateRoadmap(id: string) {
    this.userStorage.setActiveRoadmapId(id);
    this.activeRoadmapId = id;
  }

  // Open and activate a saved roadmap
  openSavedRoadmap(id: string) {
    this.userStorage.setActiveRoadmapId(id);
    this.activeRoadmapId = id;
    // navigate to roadmap page with savedId query param so it loads automatically
    this.router.navigate(['/roadmap'], { queryParams: { savedId: id } });
  }

  // Open quiz page for a saved roadmap
  openQuiz(id: string) {
    try {
      this.router.navigate(['/quiz', id]);
    } catch (e) {
      // ignore
    }
  }

  // Delete a saved roadmap
  deleteSavedRoadmap(id: string) {
    const filtered = this.savedRoadmaps.filter((r: any) => r.id !== id);
    this.userStorage.setSavedRoadmaps(filtered);
    this.savedRoadmaps = filtered;
    if (this.activeRoadmapId === id) {
      this.userStorage.setActiveRoadmapId(null);
      this.activeRoadmapId = null;
    }
  }

  logout() {
    this.router.navigate(['/auth']);
  }

  goToSkills() {
    this.router.navigate(['/skills']);
  }

  goToCareerGoal() {
    this.router.navigate(['/career-goal']);
  }

  goToRoadmap() {
    this.markSeen();
    this.router.navigate(['/roadmap']);
  }

  markSeen() {
    const key = `seenDashboard_${this.userName}`;
    this.userStorage.setItem(key, 'true');
    this.isFirstLogin = false;
  }

  // Open a modal listing all courses/resources from the active saved roadmap
  openAllCourses() {
    try {
      this.coursesList = [];
      // prefer the active saved roadmap, fallback to the first saved roadmap
      const roadmap = this.savedRoadmaps.find(r => r.id === this.activeRoadmapId) || this.savedRoadmaps[0];
      if (!roadmap) {
        // nothing saved, show empty
        this.showCoursesModal = true;
        return;
      }

      // collect resources from roadmapLevels
      const levels = roadmap.roadmapLevels || [];
      for (const level of levels) {
        const skills = level.skills || [];
        for (const s of skills) {
          if (typeof s === 'string') continue;
          const skillName = s.name || '';
          const res = s.resources || [];
          for (const r of res) {
            this.coursesList.push({ title: r.title, url: r.url, type: 'course', source: skillName });
          }
        }
      }

      // certifications
      const certs = roadmap.certifications || [];
      for (const c of certs) {
        this.coursesList.push({ title: c, type: 'certification' });
      }

      // project ideas
      const projects = roadmap.projectIdeas || [];
      for (const p of projects) {
        this.coursesList.push({ title: p, type: 'project' });
      }

      this.showCoursesModal = true;
    } catch (e) {
      this.coursesList = [];
      this.showCoursesModal = true;
    }
  }

  closeCoursesModal() {
    this.showCoursesModal = false;
    this.coursesList = [];
  }

  // Daily Goals Methods
  loadDailyGoals() {
    try {
      const today = new Date().toISOString().split('T')[0];
      const key = `dailyGoals_${today}`;
      const stored = this.userStorage.getItem(key);
      if (stored) {
        this.dailyGoals = JSON.parse(stored);
      } else {
        // If no goals for today, clear any old goals
        this.dailyGoals = [];
        this.saveDailyGoals();
      }
    } catch (e) {
      this.dailyGoals = [];
    }
  }

  saveDailyGoals() {
    try {
      const today = new Date().toISOString().split('T')[0];
      const key = `dailyGoals_${today}`;
      this.userStorage.setItem(key, JSON.stringify(this.dailyGoals));
    } catch (e) {
      // ignore
    }
  }

  addDailyGoal() {
    if (this.newGoalText.trim()) {
      const goal = {
        id: Date.now().toString(),
        text: this.newGoalText.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      this.dailyGoals.push(goal);
      this.newGoalText = '';
      this.showAddGoal = false;
      this.saveDailyGoals();
    }
  }

  toggleGoalComplete(goalId: string) {
    const goal = this.dailyGoals.find(g => g.id === goalId);
    if (goal) {
      goal.completed = !goal.completed;
      this.saveDailyGoals();
    }
  }

  deleteGoal(goalId: string) {
    this.dailyGoals = this.dailyGoals.filter(g => g.id !== goalId);
    this.saveDailyGoals();
  }

  getCompletedGoalsCount(): number {
    return this.dailyGoals.filter(g => g.completed).length;
  }

  getTotalGoalsCount(): number {
    return this.dailyGoals.length;
  }

  getProgressPercentage(): number {
    if (this.dailyGoals.length === 0) return 0;
    return Math.round((this.getCompletedGoalsCount() / this.getTotalGoalsCount()) * 100);
  }
}
