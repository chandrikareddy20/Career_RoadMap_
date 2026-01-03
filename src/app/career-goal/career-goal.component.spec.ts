import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CareerGoalComponent } from './career-goal.component';
import { ValidationService } from '../services/validation.service';

describe('CareerGoalComponent', () => {
  let component: CareerGoalComponent;
  let fixture: ComponentFixture<CareerGoalComponent>;
  let routerMock: any;
  let validationServiceMock: any;

  beforeEach(async () => {
    routerMock = { navigate: vi.fn() };
    validationServiceMock = { showAlert: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [CareerGoalComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ValidationService, useValue: validationServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CareerGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a career when selectCareer is called', () => {
    component.selectCareer('software-developer');
    expect(component.selectedCareer).toBe('software-developer');
  });

  it('should navigate to roadmap when generateRoadmap is called with selected career', () => {
    component.selectCareer('data-scientist');
    component.generateRoadmap();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/roadmap'], {
      queryParams: { career: 'data-scientist' }
    });
  });

  it('should show alert when generateRoadmap is called without selecting a career', () => {
    component.generateRoadmap();
    expect(validationServiceMock.showAlert).toHaveBeenCalledWith(
      'Please select a career goal before generating your roadmap.'
    );
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });
});
