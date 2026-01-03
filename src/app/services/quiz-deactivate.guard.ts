import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { QuizProtectionService } from './quiz-protection.service';

@Injectable({ providedIn: 'root' })
export class QuizDeactivateGuard implements CanDeactivate<any> {
  constructor(private quizProtection: QuizProtectionService) {}

  canDeactivate(component: any): boolean {
    try {
      if (this.quizProtection && this.quizProtection.isActive()) {
        try { console.warn('[QuizDeactivateGuard] navigation attempted while quiz protection active'); } catch (e) {}
        // Treat this as leaving the quiz screen
        try { this.quizProtection.forceViolation('LEAVE_SCREEN'); } catch (e) {}
        // Cancel navigation — component remains and showResults will be displayed by violation handler
        return false;
      }
    } catch (e) {}
    return true;
  }
}
