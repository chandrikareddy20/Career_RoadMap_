import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizProtectionService, QuizViolationReason } from '../services/quiz-protection.service';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}
interface SkillQuiz {
  questions: QuizQuestion[];
  userAnswers: number[];
  score?: number;
  attempted?: boolean;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  skillName: string = '';
  quiz: SkillQuiz | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private quizProtection: QuizProtectionService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const skill = params['skill'] || '';
      this.skillName = Array.isArray(skill) ? skill[0] : skill;
      if (this.skillName) {
        this.quiz = this.generateQuizForSkill(this.skillName);
        try { this.quizProtection.startProtection((reason) => this.handleProtectionViolation(reason)); } catch (e) {}
      }
    });
  }

  ngOnDestroy(): void {
    try { this.quizProtection.stopProtection(); } catch (e) {}
  }

  private generateQuizForSkill(skillName: string): SkillQuiz {
    const qBase = skillName;
    const questions: QuizQuestion[] = [
      {
        question: `What is the primary purpose of ${qBase}?`,
        options: [
          `To use ${qBase} to solve relevant problems`,
          `To ignore ${qBase} completely`,
          `Unrelated task`,
          `Only for designers`
        ],
        correctIndex: 0
      },
      {
        question: `Which of the following is commonly associated with ${qBase}?`,
        options: [`Libraries/tools commonly used`, `Astrology`, `Cooking`, `Singing`],
        correctIndex: 0
      },
      {
        question: `What is a sensible next step after learning ${qBase}?`,
        options: [`Apply it in a small project`, `Forget it`, `Sell it`, `Throw it away`],
        correctIndex: 0
      },
      {
        question: `How would you measure proficiency in ${qBase}?`,
        options: [`Completing practical tasks or projects`, `By reading headlines`, `By number of tabs open`, `By phone battery`],
        correctIndex: 0
      },
      {
        question: `Which resource type helps most with ${qBase}?`,
        options: [`Hands-on tutorials or projects`, `Horoscopes`, `Movie reviews`, `Novels`],
        correctIndex: 0
      }
    ];
    return {
      questions,
      userAnswers: questions.map(() => -1),
      score: 0,
      attempted: false
    };
  }

  submit() {
    if (!this.quiz) return;
    let correct = 0;
    for (let i = 0; i < this.quiz.questions.length; i++) {
      const ans = Number(this.quiz.userAnswers[i]);
      if (ans === this.quiz.questions[i].correctIndex) correct++;
    }
    this.quiz.score = Math.round((correct / this.quiz.questions.length) * 100);
    this.quiz.attempted = true;
    try { this.quizProtection.stopProtection(); } catch (e) {}
  }

  // Return true when all questions have been answered (no -1 left)
  allAnswered(): boolean {
    if (!this.quiz) return false;
    return this.quiz.userAnswers.every(a => a >= 0);
  }

  back() {
    if (this.quiz && !this.quiz.attempted) {
      this.handleProtectionViolation('LEAVE_SCREEN');
      return;
    }
    this.router.navigate(['/roadmap']);
  }

  private handleProtectionViolation(reason: QuizViolationReason) {
    // End quiz, compute score and alert user; keep results visible on same page
    try { this.submit(); } catch (e) {}
    try { console.log('[Quiz] Protection violation handler called with reason:', reason); } catch (e) {}
    let message = 'You left the quiz screen. Quiz ended due to security policy.';
    if (reason === 'TAB_SWITCH') {
      message = 'You switched the tab, that\'s why the quiz has ended.';
    } else if (reason === 'BACK_BUTTON') {
      message = 'You used the back button. Quiz ended due to security policy.';
    }
    try { window.alert(message); } catch (e) { try { console.error('[Quiz] alert failed', e); } catch (e2) {} }
    try { this.quizProtection.stopProtection(); } catch (e) {}
  }
}
