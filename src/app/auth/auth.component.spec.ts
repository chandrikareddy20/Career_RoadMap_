import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';

describe('AuthComponent - Unit (example)', () => {
  let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the main title', () => {
    const h1 = fixture.debugElement.query(By.css('.title h1')).nativeElement;
    expect(h1.textContent.trim()).toBe('Career Compass');
  });

  it('toggles to register and shows full name field', () => {
    // ensure initial state
    component.isLogin = true;
    fixture.detectChanges();
    // click Register tab (second button)
    const registerBtn = fixture.debugElement.queryAll(By.css('.tabs button'))[1];
    registerBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isLogin).toBeFalsy();
    const fullName = fixture.debugElement.query(By.css('input[name="fullName"]'));
    expect(fullName).not.toBeNull();
  });

  it('disables submit when required fields are empty (login mode)', () => {
    component.isLogin = true;
    component.email = '';
    component.password = '';
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button.main-btn')).nativeElement;
    expect(btn.disabled).toBeTruthy();
  });
});
