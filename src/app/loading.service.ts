import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private loadingMessageSubject = new BehaviorSubject<string>('Loading...');
  private loadingCount = 0;

  isLoading$: Observable<boolean> = this.loadingSubject.asObservable();
  loadingMessage$: Observable<string> = this.loadingMessageSubject.asObservable();

  show(message: string = 'Loading...'): void {
    this.loadingCount++;
    this.loadingMessageSubject.next(message);
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    if (this.loadingCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  forceHide(): void {
    this.loadingCount = 0;
    this.loadingSubject.next(false);
  }

  isLoading(): boolean {
    return this.loadingSubject.value;
  }
}

