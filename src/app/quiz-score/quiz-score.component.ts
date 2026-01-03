import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-quiz-score',
  standalone: true,
  imports: [NgIf],
  templateUrl: './quiz-score.component.html',
  styleUrls: []
})
export class QuizScoreComponent implements OnInit {
  latestAttempt: any = null;

  constructor(private userStorage: UserStorageService) {}

  ngOnInit(): void {
    try {
      const attempts = this.userStorage.getQuizAttempts() || [];
      if (attempts.length > 0) this.latestAttempt = attempts[attempts.length - 1];
    } catch (e) { this.latestAttempt = null; }
  }
}
