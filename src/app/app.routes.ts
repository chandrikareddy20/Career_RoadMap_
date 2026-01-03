import { Routes } from '@angular/router';
import { QuizDeactivateGuard } from './services/quiz-deactivate.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'career-goal',
    loadComponent: () => import('./career-goal/career-goal.component').then(m => m.CareerGoalComponent)
  },
  {
    path: 'roadmap',
    loadComponent: () => import('./roadmap/roadmap.component').then(m => m.RoadmapComponent)
  },
  {
    path: 'quiz/:roadmapId',
    loadComponent: () => import('./quiz-page/quiz-page.component').then(m => m.QuizPageComponent),
    canDeactivate: [QuizDeactivateGuard]
  },
  {
    path: 'quiz-score',
    loadComponent: () => import('./quiz-score/quiz-score.component').then(m => m.QuizScoreComponent)
  },
  {
    path: 'project/:id',
    loadComponent: () => import('./project-details/project-details.component').then(m => m.ProjectDetailsComponent)
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];
