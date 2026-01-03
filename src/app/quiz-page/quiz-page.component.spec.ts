import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { QuizPageComponent } from './quiz-page.component';
import { QuizService } from '../services/quiz.service';
import { UserStorageService } from '../services/user-storage.service';

describe('QuizPageComponent', () => {
  let component: QuizPageComponent;
  let fixture: ComponentFixture<QuizPageComponent>;
  let routerMock: { navigate: ReturnType<typeof vi.fn> };
  let userStorageMock: any;
  let routeMock: any;

  beforeEach(async () => {
    routerMock = { navigate: vi.fn() } as any;

    // Mock user storage with a saved roadmap containing one skill
    const savedRoadmap = {
      id: 'example-1',
      name: 'Example Roadmap',
      roadmapLevels: [
        { level: 'Beginner', skills: [{ name: 'Python', description: '', durationWeeks: 1, completed: false }], expanded: true }
      ],
      progress: 0,
      skillsCompleted: 0,
      estimatedTime: '4 weeks'
    };

    userStorageMock = {
      getSavedRoadmaps: vi.fn(() => [savedRoadmap]),
      getActiveRoadmapId: vi.fn(() => 'example-1'),
      addQuizAttempt: vi.fn(),
      setSavedRoadmaps: vi.fn(),
      setRoadmapSummary: vi.fn()
    };

    routeMock = {
      paramMap: of({ get: (k: string) => 'example-1' }),
      queryParams: of({ skill: 'Python' })
    };

    await TestBed.configureTestingModule({
      imports: [QuizPageComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: UserStorageService, useValue: userStorageMock },
        { provide: ActivatedRoute, useValue: routeMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark a focused skill completed in saved roadmap after submitting a quiz', () => {
    // prepare a small quiz for the component and mark answers as correct
    component.quiz = {
      id: 'example-1:Python',
      name: 'Python Quiz',
      questions: [
        { question: 'Q1', options: ['A'], correctIndex: 0 },
        { question: 'Q2', options: ['A'], correctIndex: 0 }
      ]
    } as any;
    component.userAnswers = [0, 0];
    component.roadmapId = 'example-1';
    component.focusedSkill = 'Python';

    component.submit();

    expect(userStorageMock.addQuizAttempt).toHaveBeenCalled();
    expect(userStorageMock.setSavedRoadmaps).toHaveBeenCalled();
    expect(userStorageMock.setRoadmapSummary).toHaveBeenCalled();
    // Verify the saved roadmap updates included marking Python as completed
    const savedArg = userStorageMock.setSavedRoadmaps.mock.calls[0][0];
    const updated = savedArg.find((r: any) => r.id === 'example-1');
    const skillObj = updated.roadmapLevels[0].skills[0];
    expect(skillObj.completed).toBe(true);
  });
});
