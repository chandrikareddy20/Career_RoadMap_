import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let routerMock: { navigate: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    routerMock = {
      navigate: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        { provide: Router, useValue: routerMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default userName', () => {
    expect(component.userName).toBe('chandu');
  });

  it('should navigate to auth on logout', () => {
    component.logout();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/auth']);
  });

  it('should hide action cards for new users without a roadmap', () => {
    // simulate first login with no roadmap
    component.isFirstLogin = true;
    component.hasRoadmap = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    // action-cards section has class 'action-cards'
    const action = compiled.querySelector('.action-cards');
    expect(action).toBeNull();
  });

  it('should show action cards when a roadmap exists', () => {
    component.isFirstLogin = false;
    component.hasRoadmap = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const action = compiled.querySelector('.action-cards');
    expect(action).toBeTruthy();
  });
});
