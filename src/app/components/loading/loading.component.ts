import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  template: `
    <div
      *ngIf="loadingService.isLoading$ | async"
      class="loading-overlay"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p class="loading-message">{{ loadingService.loadingMessage$ | async }}</p>
      </div>
    </div>
  `,
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(7, 27, 46, 0.85);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .loading-spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid rgba(46, 107, 255, 0.2);
      border-top-color: #2E6BFF;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .loading-message {
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }
  `]
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}

