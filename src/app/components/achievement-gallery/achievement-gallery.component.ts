import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStorageService } from '../../services/user-storage.service';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'Learning' | 'Speed' | 'Mastery' | 'Consistency';
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  unlockedAt?: string;
  progress: number; // 0-100
  requirement: string;
  requirementValue: number;
  currentValue: number;
}

@Component({
  selector: 'app-achievement-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement-gallery.component.html',
  styleUrls: ['./achievement-gallery.component.css']
})
export class AchievementGalleryComponent implements OnInit {
  @Input() badges: Array<{ id: string; title: string; description?: string; earnedAt?: string }> = [];
  
  achievements: Achievement[] = [];
  selectedCategory: 'All' | 'Learning' | 'Speed' | 'Mastery' | 'Consistency' = 'All';
  showCelebration: boolean = false;
  celebratingAchievement: Achievement | null = null;
  categories: Array<'All' | 'Learning' | 'Speed' | 'Mastery' | 'Consistency'> = ['All', 'Learning', 'Speed', 'Mastery', 'Consistency'];
  showFullGallery: boolean = false;

  constructor(private userStorage: UserStorageService) {}

  ngOnInit(): void {
    this.initializeAchievements();
    this.updateAchievementProgress();
    this.checkForNewUnlocks();
  }

  private initializeAchievements(): void {
    this.achievements = [
      // Learning Category
      {
        id: 'first-skill',
        title: 'First Steps',
        description: 'Complete your first skill',
        category: 'Learning',
        icon: '🎯',
        rarity: 'common',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 1 skill',
        requirementValue: 1,
        currentValue: 0
      },
      {
        id: 'skill-milestone-5',
        title: 'Skill Collector',
        description: 'Complete 5 skills',
        category: 'Learning',
        icon: '📚',
        rarity: 'rare',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 5 skills',
        requirementValue: 5,
        currentValue: 0
      },
      {
        id: 'skill-milestone-10',
        title: 'Knowledge Seeker',
        description: 'Complete 10 skills',
        category: 'Learning',
        icon: '🌟',
        rarity: 'epic',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 10 skills',
        requirementValue: 10,
        currentValue: 0
      },
      {
        id: 'skill-milestone-25',
        title: 'Master Learner',
        description: 'Complete 25 skills',
        category: 'Learning',
        icon: '👑',
        rarity: 'legendary',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 25 skills',
        requirementValue: 25,
        currentValue: 0
      },
      
      // Speed Category
      {
        id: 'fast-learner',
        title: 'Fast Learner',
        description: 'Complete 3 skills in one day',
        category: 'Speed',
        icon: '⚡',
        rarity: 'rare',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 3 skills in 1 day',
        requirementValue: 3,
        currentValue: 0
      },
      {
        id: 'speed-demon',
        title: 'Speed Demon',
        description: 'Complete 5 skills in one day',
        category: 'Speed',
        icon: '🚀',
        rarity: 'epic',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 5 skills in 1 day',
        requirementValue: 5,
        currentValue: 0
      },
      {
        id: 'lightning-fast',
        title: 'Lightning Fast',
        description: 'Complete 10 skills in one day',
        category: 'Speed',
        icon: '⚡',
        rarity: 'legendary',
        unlocked: false,
        progress: 0,
        requirement: 'Complete 10 skills in 1 day',
        requirementValue: 10,
        currentValue: 0
      },
      
      // Mastery Category
      {
        id: 'quiz-master',
        title: 'Quiz Master',
        description: 'Score 100% on a quiz',
        category: 'Mastery',
        icon: '🏆',
        rarity: 'rare',
        unlocked: false,
        progress: 0,
        requirement: 'Score 100% on any quiz',
        requirementValue: 100,
        currentValue: 0
      },
      {
        id: 'perfect-week',
        title: 'Perfect Week',
        description: 'Score 100% on 7 quizzes',
        category: 'Mastery',
        icon: '💯',
        rarity: 'epic',
        unlocked: false,
        progress: 0,
        requirement: 'Score 100% on 7 quizzes',
        requirementValue: 7,
        currentValue: 0
      },
      {
        id: 'flawless-master',
        title: 'Flawless Master',
        description: 'Score 100% on 25 quizzes',
        category: 'Mastery',
        icon: '✨',
        rarity: 'legendary',
        unlocked: false,
        progress: 0,
        requirement: 'Score 100% on 25 quizzes',
        requirementValue: 25,
        currentValue: 0
      },
      {
        id: 'high-achiever',
        title: 'High Achiever',
        description: 'Score 90%+ on 10 quizzes',
        category: 'Mastery',
        icon: '⭐',
        rarity: 'rare',
        unlocked: false,
        progress: 0,
        requirement: 'Score 90%+ on 10 quizzes',
        requirementValue: 10,
        currentValue: 0
      },
      
      // Consistency Category
      {
        id: 'early-bird',
        title: 'Early Bird',
        description: 'Complete a skill before 9 AM',
        category: 'Consistency',
        icon: '🌅',
        rarity: 'common',
        unlocked: false,
        progress: 0,
        requirement: 'Complete a skill before 9 AM',
        requirementValue: 1,
        currentValue: 0
      },
      {
        id: 'night-owl',
        title: 'Night Owl',
        description: 'Complete a skill after 10 PM',
        category: 'Consistency',
        icon: '🦉',
        rarity: 'common',
        unlocked: false,
        progress: 0,
        requirement: 'Complete a skill after 10 PM',
        requirementValue: 1,
        currentValue: 0
      },
      {
        id: 'streak-7',
        title: 'Week Warrior',
        description: 'Maintain a 7-day learning streak',
        category: 'Consistency',
        icon: '🔥',
        rarity: 'rare',
        unlocked: false,
        progress: 0,
        requirement: '7-day learning streak',
        requirementValue: 7,
        currentValue: 0
      },
      {
        id: 'streak-30',
        title: 'Monthly Champion',
        description: 'Maintain a 30-day learning streak',
        category: 'Consistency',
        icon: '💪',
        rarity: 'epic',
        unlocked: false,
        progress: 0,
        requirement: '30-day learning streak',
        requirementValue: 30,
        currentValue: 0
      },
      {
        id: 'streak-100',
        title: 'Centurion',
        description: 'Maintain a 100-day learning streak',
        category: 'Consistency',
        icon: '🏅',
        rarity: 'legendary',
        unlocked: false,
        progress: 0,
        requirement: '100-day learning streak',
        requirementValue: 100,
        currentValue: 0
      }
    ];
  }

  private updateAchievementProgress(): void {
    const events = this.userStorage.getCompletionEvents();
    const quizzes = this.userStorage.getQuizAttempts();
    const skillsCompleted = events.length;
    
    // Calculate daily completions
    const byDay = new Map<string, number>();
    events.forEach(e => {
      const day = new Date(e.at).toISOString().slice(0, 10);
      byDay.set(day, (byDay.get(day) || 0) + 1);
    });
    
    // Calculate perfect scores
    const perfectScores = quizzes.filter(q => q.score === 100).length;
    const highScores = quizzes.filter(q => q.score >= 90).length;
    
    // Calculate streaks (simplified - check consecutive days)
    const sortedDays = Array.from(byDay.keys()).sort();
    let currentStreak = 0;
    let maxStreak = 0;
    const today = new Date().toISOString().slice(0, 10);
    
    for (let i = 0; i < sortedDays.length; i++) {
      const day = sortedDays[i];
      const nextDay = new Date(day);
      nextDay.setDate(nextDay.getDate() + 1);
      const expectedNext = nextDay.toISOString().slice(0, 10);
      
      if (i === 0 || sortedDays[i - 1] === expectedNext || day === today) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 1;
      }
    }
    
    // Check for early bird and night owl
    let hasEarlyBird = false;
    let hasNightOwl = false;
    events.forEach(e => {
      const d = new Date(e.at);
      const h = d.getHours();
      if (h < 9) hasEarlyBird = true;
      if (h >= 22) hasNightOwl = true;
    });
    
    // Update achievements
    this.achievements.forEach(achievement => {
      switch (achievement.id) {
        case 'first-skill':
          achievement.currentValue = skillsCompleted;
          achievement.progress = Math.min(100, (skillsCompleted / achievement.requirementValue) * 100);
          achievement.unlocked = skillsCompleted >= achievement.requirementValue;
          break;
        case 'skill-milestone-5':
          achievement.currentValue = skillsCompleted;
          achievement.progress = Math.min(100, (skillsCompleted / achievement.requirementValue) * 100);
          achievement.unlocked = skillsCompleted >= achievement.requirementValue;
          break;
        case 'skill-milestone-10':
          achievement.currentValue = skillsCompleted;
          achievement.progress = Math.min(100, (skillsCompleted / achievement.requirementValue) * 100);
          achievement.unlocked = skillsCompleted >= achievement.requirementValue;
          break;
        case 'skill-milestone-25':
          achievement.currentValue = skillsCompleted;
          achievement.progress = Math.min(100, (skillsCompleted / achievement.requirementValue) * 100);
          achievement.unlocked = skillsCompleted >= achievement.requirementValue;
          break;
        case 'fast-learner':
          const maxInDay = Math.max(...Array.from(byDay.values()));
          achievement.currentValue = maxInDay;
          achievement.progress = Math.min(100, (maxInDay / achievement.requirementValue) * 100);
          achievement.unlocked = maxInDay >= achievement.requirementValue;
          break;
        case 'speed-demon':
          const maxInDay2 = Math.max(...Array.from(byDay.values()));
          achievement.currentValue = maxInDay2;
          achievement.progress = Math.min(100, (maxInDay2 / achievement.requirementValue) * 100);
          achievement.unlocked = maxInDay2 >= achievement.requirementValue;
          break;
        case 'lightning-fast':
          const maxInDay3 = Math.max(...Array.from(byDay.values()));
          achievement.currentValue = maxInDay3;
          achievement.progress = Math.min(100, (maxInDay3 / achievement.requirementValue) * 100);
          achievement.unlocked = maxInDay3 >= achievement.requirementValue;
          break;
        case 'quiz-master':
          achievement.currentValue = perfectScores > 0 ? 1 : 0;
          achievement.progress = perfectScores > 0 ? 100 : 0;
          achievement.unlocked = perfectScores > 0;
          break;
        case 'perfect-week':
          achievement.currentValue = perfectScores;
          achievement.progress = Math.min(100, (perfectScores / achievement.requirementValue) * 100);
          achievement.unlocked = perfectScores >= achievement.requirementValue;
          break;
        case 'flawless-master':
          achievement.currentValue = perfectScores;
          achievement.progress = Math.min(100, (perfectScores / achievement.requirementValue) * 100);
          achievement.unlocked = perfectScores >= achievement.requirementValue;
          break;
        case 'high-achiever':
          achievement.currentValue = highScores;
          achievement.progress = Math.min(100, (highScores / achievement.requirementValue) * 100);
          achievement.unlocked = highScores >= achievement.requirementValue;
          break;
        case 'early-bird':
          achievement.currentValue = hasEarlyBird ? 1 : 0;
          achievement.progress = hasEarlyBird ? 100 : 0;
          achievement.unlocked = hasEarlyBird;
          break;
        case 'night-owl':
          achievement.currentValue = hasNightOwl ? 1 : 0;
          achievement.progress = hasNightOwl ? 100 : 0;
          achievement.unlocked = hasNightOwl;
          break;
        case 'streak-7':
          achievement.currentValue = maxStreak;
          achievement.progress = Math.min(100, (maxStreak / achievement.requirementValue) * 100);
          achievement.unlocked = maxStreak >= achievement.requirementValue;
          break;
        case 'streak-30':
          achievement.currentValue = maxStreak;
          achievement.progress = Math.min(100, (maxStreak / achievement.requirementValue) * 100);
          achievement.unlocked = maxStreak >= achievement.requirementValue;
          break;
        case 'streak-100':
          achievement.currentValue = maxStreak;
          achievement.progress = Math.min(100, (maxStreak / achievement.requirementValue) * 100);
          achievement.unlocked = maxStreak >= achievement.requirementValue;
          break;
      }
      
      // Set unlock date if newly unlocked
      if (achievement.unlocked && !achievement.unlockedAt) {
        achievement.unlockedAt = new Date().toISOString();
      }
    });
  }

  private checkForNewUnlocks(): void {
    const newlyUnlocked = this.achievements.filter(a => a.unlocked && !a.unlockedAt);
    if (newlyUnlocked.length > 0) {
      this.celebrateAchievement(newlyUnlocked[0]);
    }
  }

  celebrateAchievement(achievement: Achievement): void {
    this.celebratingAchievement = achievement;
    this.showCelebration = true;
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      this.showCelebration = false;
      setTimeout(() => {
        this.celebratingAchievement = null;
      }, 500);
    }, 4000);
  }

  getFilteredAchievements(): Achievement[] {
    if (this.selectedCategory === 'All') {
      return this.achievements;
    }
    return this.achievements.filter(a => a.category === this.selectedCategory);
  }

  getCategoryCount(category: string): number {
    if (category === 'All') {
      return this.achievements.length;
    }
    return this.achievements.filter(a => a.category === category).length;
  }

  getCategoryUnlockedCount(category: string): number {
    if (category === 'All') {
      return this.achievements.filter(a => a.unlocked).length;
    }
    return this.achievements.filter(a => a.category === category && a.unlocked).length;
  }

  getProgressPercentage(progress: number): number {
    return Math.round(progress);
  }

  setCategory(category: 'All' | 'Learning' | 'Speed' | 'Mastery' | 'Consistency'): void {
    this.selectedCategory = category;
  }

  getRecentlyEarned(): Achievement[] {
    return this.achievements
      .filter(a => a.unlocked && a.unlockedAt)
      .sort((a, b) => {
        const dateA = a.unlockedAt ? new Date(a.unlockedAt).getTime() : 0;
        const dateB = b.unlockedAt ? new Date(b.unlockedAt).getTime() : 0;
        return dateB - dateA; // Most recent first
      })
      .slice(0, 5); // Show top 5 most recent
  }

  toggleFullGallery(): void {
    this.showFullGallery = !this.showFullGallery;
  }
}

