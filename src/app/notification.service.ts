import { Injectable } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number;
  timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications: Notification[] = [];
  private defaultDuration = 5000; // 5 seconds

  getNotifications(): Notification[] {
    return this.notifications;
  }

  show(message: string, type: NotificationType = 'info', duration?: number): string {
    const id = `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const notification: Notification = {
      id,
      message,
      type,
      duration: duration ?? this.defaultDuration,
      timestamp: Date.now()
    };

    this.notifications.push(notification);

    // Auto-remove after duration
    // notification.duration is always set (not undefined) due to nullish coalescing above
    const notificationDuration = notification.duration ?? this.defaultDuration;
    if (notificationDuration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, notificationDuration);
    }

    return id;
  }

  success(message: string, duration?: number): string {
    return this.show(message, 'success', duration);
  }

  error(message: string, duration?: number): string {
    return this.show(message, 'error', duration || 7000); // Errors stay longer
  }

  warning(message: string, duration?: number): string {
    return this.show(message, 'warning', duration);
  }

  info(message: string, duration?: number): string {
    return this.show(message, 'info', duration);
  }

  remove(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  clear(): void {
    this.notifications = [];
  }
}

