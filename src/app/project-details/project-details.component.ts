import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../components/project-generator/project-generator.component';
import { ProjectGeneratorService } from '../services/project-generator.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null;
  projectId: string = '';
  showSteps: boolean = false;
  showGitHubSetup: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectGeneratorService,
    private userStorage: UserStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.loadProject();
    });
  }

  private loadProject(): void {
    // Get user skills and career goal for project generation
    let userSkills: Array<{ name: string; level: string }> = [];
    let careerGoal: string = '';
    
    try {
      userSkills = this.userStorage.getUserSkills();
      if (!userSkills || userSkills.length === 0) {
        const saved = this.userStorage.getItem('currentSkills');
        if (saved) {
          userSkills = JSON.parse(saved);
        }
      }
      
      // Get career goal from roadmap summary
      const summary = this.userStorage.getRoadmapSummary();
      if (summary && summary.careerTitle) {
        careerGoal = summary.careerTitle;
      }
    } catch (e) {
      // Use empty array
    }

    // Get project from service
    this.project = this.projectService.getProjectById(this.projectId, userSkills, careerGoal);
    
    if (!this.project) {
      // Project not found, redirect to dashboard
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }

  toggleSteps(): void {
    this.showSteps = !this.showSteps;
    this.showGitHubSetup = false;
  }

  toggleGitHubSetup(): void {
    this.showGitHubSetup = !this.showGitHubSetup;
    this.showSteps = false;
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Beginner': return '#2E6BFF';
      case 'Intermediate': return '#2558D8';
      case 'Advanced': return '#1a4ac0';
      default: return '#A9B7C9';
    }
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}

