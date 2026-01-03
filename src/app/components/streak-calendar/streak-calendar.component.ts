import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStorageService } from '../../services/user-storage.service';

interface DayActivity {
  date: string; // YYYY-MM-DD
  count: number; // Number of activities on this day
  level: 0 | 1 | 2 | 3 | 4; // Activity level for color intensity
}

interface CalendarDay {
  date: Date;
  activity: DayActivity | null;
  isToday: boolean;
  isFuture: boolean;
  isInRange: boolean;
}

@Component({
  selector: 'app-streak-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './streak-calendar.component.html',
  styleUrls: ['./streak-calendar.component.css']
})
export class StreakCalendarComponent implements OnInit {
  currentStreak: number = 0;
  longestStreak: number = 0;
  totalContributions: number = 0;
  viewMode: 'year' | 'month' = 'year';
  
  calendarDays: CalendarDay[] = [];
  activityMap: Map<string, DayActivity> = new Map();
  
  selectedDay: DayActivity | null = null;
  showTooltip: boolean = false;
  tooltipX: number = 0;
  tooltipY: number = 0;

  constructor(private userStorage: UserStorageService) {}

  ngOnInit(): void {
    this.loadActivityData();
    this.calculateStreaks();
    this.generateCalendar();
  }

  private loadActivityData(): void {
    const events = this.userStorage.getCompletionEvents();
    const quizzes = this.userStorage.getQuizAttempts();
    
    // Combine all activities
    const allActivities: { date: string }[] = [];
    
    // Add completion events
    events.forEach(event => {
      const date = new Date(event.at).toISOString().slice(0, 10);
      allActivities.push({ date });
    });
    
    // Add quiz attempts
    quizzes.forEach(quiz => {
      const date = new Date(quiz.at).toISOString().slice(0, 10);
      allActivities.push({ date });
    });
    
    // Count activities per day
    const dayCounts = new Map<string, number>();
    allActivities.forEach(activity => {
      const count = dayCounts.get(activity.date) || 0;
      dayCounts.set(activity.date, count + 1);
    });
    
    // Create activity map with levels
    dayCounts.forEach((count, date) => {
      const level = this.getActivityLevel(count);
      this.activityMap.set(date, {
        date,
        count,
        level
      });
    });
    
    this.totalContributions = allActivities.length;
  }

  private getActivityLevel(count: number): 0 | 1 | 2 | 3 | 4 {
    if (count === 0) return 0;
    if (count === 1) return 1;
    if (count >= 2 && count <= 3) return 2;
    if (count >= 4 && count <= 5) return 3;
    return 4; // 6+ activities
  }

  private calculateStreaks(): void {
    const sortedDates = Array.from(this.activityMap.keys())
      .map(date => new Date(date))
      .sort((a, b) => a.getTime() - b.getTime());
    
    if (sortedDates.length === 0) {
      this.currentStreak = 0;
      this.longestStreak = 0;
      return;
    }
    
    // Calculate longest streak
    let longest = 1;
    let currentLongest = 1;
    let lastDate = sortedDates[0];
    
    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = sortedDates[i];
      const daysDiff = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === 1) {
        currentLongest++;
        longest = Math.max(longest, currentLongest);
      } else {
        currentLongest = 1;
      }
      
      lastDate = currentDate;
    }
    
    this.longestStreak = longest;
    
    // Calculate current streak (from today backwards)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let currentStreakCount = 0;
    let checkDate = new Date(today);
    
    // Check if today has activity
    const todayStr = today.toISOString().slice(0, 10);
    if (this.activityMap.has(todayStr)) {
      currentStreakCount = 1;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      // If today has no activity, start from yesterday
      checkDate.setDate(checkDate.getDate() - 1);
    }
    
    // Count backwards
    while (checkDate >= sortedDates[0]) {
      const dateStr = checkDate.toISOString().slice(0, 10);
      if (this.activityMap.has(dateStr)) {
        currentStreakCount++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    this.currentStreak = currentStreakCount;
  }

  private generateCalendar(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const days: CalendarDay[] = [];
    
    if (this.viewMode === 'year') {
      // Show last 365 days
      for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().slice(0, 10);
        
        days.push({
          date: new Date(date),
          activity: this.activityMap.get(dateStr) || null,
          isToday: i === 0,
          isFuture: false,
          isInRange: true
        });
      }
    } else {
      // Show current month
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      
      // Add days from previous month to fill first week
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - startDate.getDay());
      
      const endDate = new Date(lastDay);
      const daysToAdd = 6 - endDate.getDay();
      endDate.setDate(endDate.getDate() + daysToAdd);
      
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().slice(0, 10);
        const isCurrentMonth = d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
        
        days.push({
          date: new Date(d),
          activity: this.activityMap.get(dateStr) || null,
          isToday: dateStr === today.toISOString().slice(0, 10),
          isFuture: d > today,
          isInRange: isCurrentMonth
        });
      }
    }
    
    this.calendarDays = days;
  }

  toggleView(): void {
    this.viewMode = this.viewMode === 'year' ? 'month' : 'year';
    this.generateCalendar();
  }

  onDayHover(day: CalendarDay, event: MouseEvent): void {
    if (day.activity) {
      this.selectedDay = day.activity;
      this.tooltipX = event.clientX;
      this.tooltipY = event.clientY;
      this.showTooltip = true;
    }
  }

  onDayLeave(): void {
    this.showTooltip = false;
    this.selectedDay = null;
  }

  getActivityClass(day: CalendarDay): string {
    if (day.isFuture || !day.isInRange) {
      return 'day-empty';
    }
    
    if (!day.activity || day.activity.level === 0) {
      return 'day-none';
    }
    
    return `day-level-${day.activity.level}`;
  }

  getActivityColor(day: CalendarDay): string {
    if (day.isFuture || !day.isInRange) {
      return '#161B22';
    }
    
    if (!day.activity || day.activity.level === 0) {
      return '#161B22';
    }
    
    const colors = [
      '#161B22', // No activity
      '#0E4429', // Level 1 - 1 activity
      '#006D32', // Level 2 - 2-3 activities
      '#26A641', // Level 3 - 4-5 activities
      '#39D353'  // Level 4 - 6+ activities
    ];
    
    return colors[day.activity.level] || colors[0];
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  }

  getStreakEmoji(): string {
    if (this.currentStreak >= 100) return '🔥💯';
    if (this.currentStreak >= 30) return '🔥🔥🔥';
    if (this.currentStreak >= 7) return '🔥🔥';
    if (this.currentStreak > 0) return '🔥';
    return '💤';
  }

  getSelectedDayFormattedDate(): string {
    if (!this.selectedDay) return '';
    return this.formatDate(new Date(this.selectedDay.date));
  }
}

