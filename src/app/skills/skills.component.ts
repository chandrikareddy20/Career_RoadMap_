import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidationService } from '../services/validation.service';
import { UserStorageService } from '../services/user-storage.service';

interface Skill {
  name: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillName: string = '';
  skillLevel: string = 'Beginner';
  skills: Skill[] = [];

  interest: string = '';
  interests: string[] = [];
  skillError: string = '';
  interestError: string = '';

  levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  technicalSkillOptions: string[] = [
    'Python Programming',
    'JavaScript',
    'HTML & CSS',
    'React',
    'Angular',
    'Java',
    'C++',
    'SQL / Databases',
    'Data Analysis',
    'Machine Learning',
    'Artificial Intelligence',
    'Cybersecurity',
    'Cloud Computing',
    'DevOps',
    'Networking',
    'UI/UX Design',
    'Mobile Development',
    'Blockchain',
    'Game Development'
  ];
  interestOptions: string[] = [
    'Artificial Intelligence',
    'Data Science',
    'Web Development',
    'Mobile App Development',
    'Cybersecurity',
    'Cloud Infrastructure',
    'DevOps & Automation',
    'Product Management',
    'Blockchain',
    'Game Development',
    'Internet of Things (IoT)',
    'AR/VR',
    'Quantum Computing',
    'Open Source Contributions'
  ];

  constructor(
    private router: Router,
    private validationService: ValidationService,
    private userStorage: UserStorageService
  ) {}

  ngOnInit() {
    // Load saved skills and interests from localStorage
    this.loadSkills();
    this.loadInterests();
  }

  loadSkills() {
    this.skills = this.userStorage.getUserSkills();
  }

  saveSkills() {
    this.userStorage.setUserSkills(this.skills);
  }

  loadInterests() {
    this.interests = this.userStorage.getUserInterests();
  }

  saveInterests() {
    this.userStorage.setUserInterests(this.interests);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  addSkill() {
    const name = (this.skillName || '').trim();
    if (!this.validationService.validateRequired(name)) {
      this.skillError = 'Please enter a skill name.';
      return;
    }

    if (!this.validationService.validateMaxLength(name, 100)) {
      this.skillError = 'Skill name is too long.';
      return;
    }

    if (this.skills.some(s => s.name.toLowerCase() === name.toLowerCase())) {
      this.skillError = 'This skill is already added.';
      return;
    }

    this.skills.push({ name, level: this.skillLevel });
    this.skillName = '';
    this.skillLevel = 'Beginner';
    this.skillError = '';
    // Save to localStorage
    this.saveSkills();
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
    // Save to localStorage after removal
    this.saveSkills();
  }

  addInterest() {
    const val = (this.interest || '').trim();
    if (!this.validationService.validateRequired(val)) {
      this.interestError = 'Please enter an interest.';
      return;
    }

    if (!this.validationService.validateMaxLength(val, 100)) {
      this.interestError = 'Interest text is too long.';
      return;
    }

    if (this.interests.some(i => i.toLowerCase() === val.toLowerCase())) {
      this.interestError = 'This interest is already added.';
      return;
    }

    this.interests.push(val);
    this.interest = '';
    this.interestError = '';
    // Save to localStorage
    this.saveInterests();
  }

  removeInterest(index: number) {
    this.interests.splice(index, 1);
    // Save to localStorage after removal
    this.saveInterests();
  }

  saveAndContinue() {
    // Validate that at least one skill is added
    if (this.skills.length === 0) {
      this.validationService.showAlert('Please add at least one technical skill before continuing.');
      return;
    }

    // Save skills and interests to localStorage (already saved on add, but ensure final save)
    this.saveSkills();
    this.saveInterests();
    
    // Also save user profile with skills
    try {
      const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      profile.skills = this.skills;
      profile.interests = this.interests;
      localStorage.setItem('userProfile', JSON.stringify(profile));
    } catch (e) {
      console.error('Error saving profile:', e);
    }
    
    // Navigate to career goal selection
    this.router.navigate(['/career-goal']);
  }
}
