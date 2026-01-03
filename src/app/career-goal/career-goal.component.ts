import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { ValidationService } from '../services/validation.service';

interface CareerOption {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-career-goal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './career-goal.component.html',
  styleUrls: ['./career-goal.component.css']
})
export class CareerGoalComponent {
  selectedCareer: string = '';

  careers: CareerOption[] = [
    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst',
      description: 'Protect systems and networks from cyber threats'
    },
    {
      id: 'soc-engineer',
      title: 'SOC Engineer',
      description: 'Monitor and respond to security incidents'
    },
    {
      id: 'software-developer',
      title: 'Software Developer',
      description: 'Build applications and software solutions'
    },
    {
      id: 'web-developer',
      title: 'Web Developer',
      description: 'Create and maintain websites and web applications'
    },
    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer',
      description: 'Design and manage cloud infrastructure'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Analyze data and build machine learning models'
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      description: 'Develop artificial intelligence systems'
    },
    {
      id: 'database-engineer',
      title: 'Database Engineer',
      description: 'Design and optimize database systems'
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      description: 'Automate deployment and infrastructure management'
    }
  ];

  constructor(
    private router: Router,
    private validationService: ValidationService
  ) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  selectCareer(careerId: string) {
    this.selectedCareer = careerId;
  }

  generateRoadmap() {
    if (!this.selectedCareer) {
      this.validationService.showAlert('Please select a career goal before generating your roadmap.');
      return;
    }

    this.router.navigate(['/roadmap'], {
      queryParams: { career: this.selectedCareer }
    });
  }
}
