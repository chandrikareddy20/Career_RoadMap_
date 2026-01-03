import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService, RoadmapQuiz } from '../services/quiz.service';
import { UserStorageService } from '../services/user-storage.service';
import { QuizProtectionService, QuizViolationReason } from '../services/quiz-protection.service';
import { NotificationService } from '../services/notification.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit, OnDestroy {
  roadmapId: string = '';
  quiz: RoadmapQuiz | null = null;
  userAnswers: number[] = [];
  score: number | null = null;
  attempted = false;
  validated: boolean = false;
  focusedSkill: string | null = null;

  // navigation
  currentIndex: number = 0;
  showResults: boolean = false;

  // Timer properties
  elapsedTime: number = 0; // in seconds
  timerInterval: any = null;
  formattedTime: string = '00:00';

  // Countdown timer properties
  timeLimit: number = 120; // 2 minutes (120 seconds) to complete quiz
  timeRemaining: number = 120;
  countdownInterval: any = null;
  formattedCountdown: string = '02:00';
  isTimeUp: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private userStorage: UserStorageService,
    private quizProtection: QuizProtectionService,
    private notificationService: NotificationService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    // read both route param and optional query param 'skill'
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('roadmapId') || '';
      this.roadmapId = id;
      // also check query params for specific skill focus
      this.route.queryParams.subscribe(q => {
        const skill = q['skill'];
        this.focusedSkill = skill || null;
        if (skill) {
          // create a focused quiz for this skill using topic-based questions
          const topicQuestions = this.quizService.getTopicQuestionsForSkill(skill);
          this.quiz = {
            id: `${id}:${skill}`,
            name: `${skill} Quiz`,
            questions: topicQuestions
          };
          this.userAnswers = this.quiz.questions.map(() => -1);
          this.score = null;
          this.attempted = false;
          this.startQuiz();
        } else {
          this.loadQuiz();
        }
      });
    });
  }

  loadQuiz() {
    const savedRoadmaps = this.userStorage.getSavedRoadmaps();
    this.quiz = this.quizService.getQuizForRoadmap(this.roadmapId, savedRoadmaps);
    if (this.quiz) {
      this.userAnswers = this.quiz.questions.map(() => -1);
      this.score = null;
      this.attempted = false;
      this.startQuiz();
    }
  }

  startQuiz() {
    this.currentIndex = 0;
    this.showResults = false;
    this.isTimeUp = false;
    // reset answers (already set by caller) and UI state
    // Start the elapsed timer
    this.startTimer();
    // Start the countdown timer
    this.startCountdown();
    // Start protection that prevents back navigation and ends quiz on tab-switch/blur
    try { this.quizProtection.startProtection((reason) => this.handleProtectionViolation(reason)); } catch (e) {}
  }

  startTimer() {
    this.elapsedTime = 0;
    this.updateFormattedTime();
    this.timerInterval = setInterval(() => {
      this.elapsedTime++;
      this.updateFormattedTime();
    }, 1000); // Update every second
  }

  startCountdown() {
    this.timeRemaining = this.timeLimit;
    this.updateFormattedCountdown();
    this.countdownInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateFormattedCountdown();

      if (this.timeRemaining <= 0) {
        this.handleTimeUp();
      }
    }, 1000); // Update every second
  }

  handleTimeUp() {
    this.isTimeUp = true;
    this.stopCountdown();
    this.stopTimer();
    // Auto-submit the quiz when time is up
    if (!this.showResults) {
      this.viewResults();
    }
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  updateFormattedTime() {
    const minutes = Math.floor(this.elapsedTime / 60);
    const seconds = this.elapsedTime % 60;
    this.formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  updateFormattedCountdown() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    this.formattedCountdown = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  ngOnDestroy() {
    this.stopTimer();
    this.stopCountdown();
    try { this.quizProtection.stopProtection(); } catch (e) {}
  }

  // Called when protection detects a violation (tab switch, blur, back, unload)
  private handleProtectionViolation(reason: QuizViolationReason) {
    // Stop timers immediately
    this.stopTimer();
    this.stopCountdown();
    // Compute and show results (this records attempt and shows the in-page "Quiz Completed" UI)
    try { this.viewResults(); } catch (e) {}
    // Inform the user, but keep them on this same quiz results page
    try { console.log('[QuizPage] Protection violation handler called with reason:', reason); } catch (e) {}
    let message = 'You left the quiz screen. Quiz ended due to security policy.';
    if (reason === 'TAB_SWITCH') {
      message = 'Security Alert: You switched the tab or moved away from the quiz window. According to our quiz security policy, leaving the quiz screen is not allowed. Your quiz has been automatically terminated.';
    } else if (reason === 'BACK_BUTTON') {
      message = 'You used the back button. Quiz ended due to security policy.';
    }
    // Use notification service instead of alert
    try {
      this.notificationService.error(message, 10000);
    } catch (e) {
      try { console.error('[QuizPage] notification failed', e); } catch (e2) {}
    }
    // Stop protection listeners now that quiz is over
    try { this.quizProtection.stopProtection(); } catch (e) {}
  }

  back() {
    // If the quiz is still active, treat this as a security violation (same as tab switch)
    if (!this.showResults) {
      this.handleProtectionViolation('LEAVE_SCREEN');
      return;
    }
    // Otherwise timers are already stopped, just navigate away
    this.stopTimer();
    this.stopCountdown();
    this.router.navigate(['/roadmap'], { queryParams: { savedId: this.roadmapId } });
  }

  allAnswered(): boolean {
    return this.userAnswers.every(a => a >= 0);
  }

  submit() {
    // legacy submit kept but primary flow auto-advances; compute final score
    if (!this.quiz) return;
    // Stop both timers
    this.stopTimer();
    this.stopCountdown();
    let correct = 0;
    for (let i = 0; i < this.quiz.questions.length; i++) {
      if (Number(this.userAnswers[i]) === this.quiz.questions[i].correctIndex) correct++;
    }
    this.score = Math.round((correct / this.quiz.questions.length) * 100);
    this.attempted = true;
    this.showResults = true;
    // mark validated success UI
    this.validated = true;
    // record quiz attempt to localStorage so dashboard can compute badges
    this.userStorage.addQuizAttempt({
      skill: this.quiz?.name || 'unknown',
      roadmapId: this.roadmapId || null,
      score: this.score,
      timeElapsed: this.formattedTime,
      at: new Date().toISOString()
    });
    // If this was a focused skill quiz, mark it completed in the saved roadmap
    try { this.markSkillCompletedInSavedRoadmap(); } catch (e) { }
  }
  // Move to next question when user clicks Next
  onNext() {
    if (!this.quiz) return;
    // Allow navigation even without answer - user can come back
    if (this.currentIndex < this.quiz.questions.length - 1) {
      this.currentIndex += 1;
    }
  }

  // Move to previous question
  onPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Navigate to specific question by index
  goToQuestion(index: number) {
    if (!this.quiz) return;
    if (index >= 0 && index < this.quiz.questions.length) {
      this.currentIndex = index;
    }
  }

  // Check if a question is answered
  isQuestionAnswered(index: number): boolean {
    return this.userAnswers[index] >= 0;
  }

  // Check if there are unanswered questions
  hasUnansweredQuestions(): boolean {
    return this.userAnswers.some(answer => answer < 0);
  }

  // View results on last question
  viewResults() {
    if (!this.quiz) return;
    // Stop both timers
    this.stopTimer();
    this.stopCountdown();
    // compute score
    let correct = 0;
    for (let i = 0; i < this.quiz.questions.length; i++) {
      if (Number(this.userAnswers[i]) === this.quiz.questions[i].correctIndex) correct++;
    }
    this.score = Math.round((correct / this.quiz.questions.length) * 100);
    this.attempted = true;
    this.showResults = true;
    // show validated completion state
    this.validated = true;
    // record quiz attempt for dashboard badges
    try {
      this.userStorage.addQuizAttempt({ skill: this.quiz?.name || 'unknown', roadmapId: this.roadmapId || null, score: this.score, timeElapsed: this.formattedTime, at: new Date().toISOString() });
    } catch (e) {}
    // If this was a focused skill quiz, mark it completed in the saved roadmap
    try { this.markSkillCompletedInSavedRoadmap(); } catch (e) { }
  }

  // Mark a skill as completed inside the currently active saved roadmap (if present)
  private markSkillCompletedInSavedRoadmap() {
    const skillName = this.focusedSkill;
    if (!skillName || !this.roadmapId) return;
    try {
      const saved = this.userStorage.getSavedRoadmaps();
      const roadmap = saved.find(r => r.id === this.roadmapId);
      if (!roadmap) return;
      let changed = false;
      for (const level of (roadmap.roadmapLevels || [])) {
        for (const s of (level.skills || [])) {
          if (typeof s !== 'string' && s.name === skillName) {
            if (!s.completed) {
              s.completed = true;
              changed = true;
            }
          }
        }
      }
      if (changed) {
        // Recompute summary (progress and skillsCompleted)
        let total = 0;
        let done = 0;
        for (const level of (roadmap.roadmapLevels || [])) {
          for (const s of (level.skills || [])) {
            if (typeof s !== 'string') {
              total++;
              if (s.completed) done++;
            }
          }
        }
        roadmap.progress = total > 0 ? Math.round((done / total) * 100) : 0;
        (roadmap as any).skillsCompleted = done;
        // Persist saved roadmaps and update the shared roadmap summary
        this.userStorage.setSavedRoadmaps(saved);
        this.userStorage.setRoadmapSummary({ careerTitle: roadmap.name || roadmap.careerTitle || '', progress: roadmap.progress || 0, skillsCompleted: (roadmap as any).skillsCompleted || 0, estimatedTime: roadmap.estimatedTime || '' });
      }
    } catch (e) {
      // ignore
    }
  }
}
