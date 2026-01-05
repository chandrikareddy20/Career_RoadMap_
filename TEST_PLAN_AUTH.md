**Test Plan: Auth Component (Career RoadMap)**

**Last Updated**: 2025-01-XX

Overview
--------
This document contains detailed manual test cases, acceptance criteria, sample unit tests (Jasmine/Karma), and sample end-to-end tests (Cypress) for the `AuthComponent` located at `src/app/auth`.

**Note**: This test plan is part of the Career RoadMap application, which includes features like Portfolio Project Generator, Skill Dependency Graph, Achievement Gallery, and enhanced quiz system with navigation.

Scope
-----
- UI elements: title, icon, subtitle, feature list
- Tabs: Login / Register toggling
- Form controls and validation (Full Name, Email, Password)
- Google login button behavior
- Responsive behavior and accessibility checks

Test Environment
----------------
- Angular app served locally via `npm start` or `ng serve`
- Node.js v14+ recommended
- Browser: Chrome (desktop and mobile emulation)
- Unit tests: Karma + Jasmine (run with `npm test`)
- E2E tests: Cypress (install with `npm i -D cypress`) and run with `npx cypress open` or `npx cypress run`

Test Data
---------
- Valid email: `test.user@example.com`
- Invalid email: `bad-email`
- Valid password: `Password123!` (>= 6 chars)
- Short password: `123` (invalid)
- Full name: `Test User`

Manual / Acceptance Test Cases (Detailed)
---------------------------------------

TC-UI-001 — Title presence and content
- Preconditions: App loaded to auth page
- Steps: Inspect `.title h1` element
- Expected: Text exactly "Career Compass"; element visible; not truncated
- Priority: High

TC-UI-002 — Icon presence & visual style
- Steps: Inspect `.icon` element
- Expected: Element present; computed dimensions approximately `56x56` (or CSS value); background and border-radius visible
- Notes: Capture screenshot for report

TC-UI-003 — Subtitle content
- Steps: Inspect `.subtitle`
- Expected: Contains marketing text; readable; font-size matches CSS

TC-UI-004 — Features list
- Steps: Count `.features li`
- Expected: At least 3 items with expected texts: "AI-Generated Roadmaps", "Personalized Learning", "Progress Tracking"

TC-UI-005 — Default tab
- Steps: Check `.tabs button.active` after load
- Expected: Login tab active by default (component sets `isLogin` true)

TC-UI-006 — Tab toggle behavior
- Steps: Click Register tab; verify `input[name="fullName"]` appears; click Login tab; verify it disappears
- Expected: Tab active class toggles; fields appear/disappear accordingly

TC-UI-007 — Required field validation (Register)
- Preconditions: Click Register to show full name field
- Steps: Attempt to submit empty form; inspect validation messages
- Expected: Submit button disabled; errors displayed for required fields

TC-UI-008 — Email format validation
- Steps: Enter `bad-email` in email field and blur
- Expected: Error: "Please enter a valid email address." shown

TC-UI-009 — Password minlength validation
- Steps: Enter `123` in password field and blur
- Expected: Error: "Password must be at least 6 characters." shown

TC-UI-010 — Successful enable and submit
- Steps: Fill valid credentials, check submit button enabled, click
- Expected: Submit handler called (or navigation/feedback), button enabled

TC-UI-011 — Google login
- Steps: Click `.google-btn`
- Expected: `loginWithGoogle()` invoked or external popup/redirect triggered (mock in test)

TC-UI-012 — Responsive test matrix
- Viewports: Desktop 1366x768, Tablet 768x1024, Mobile 375x667
- Steps: Load auth page and confirm layout (no overflow, readable text, `.right` card adapts)

TC-ACC-001 — Accessibility checks
- Steps: Run Lighthouse or axe; check color contrast, keyboard focus order, ARIA attributes
- Expected: No critical accessibility failures

Pass / Fail Criteria
--------------------
- Tests marked High are required for release.
- Any High test failure requires issue triage and fix.

Automated Test Examples (for report)
----------------------------------

1) Jasmine / Karma unit test snippet (place in `src/app/auth/auth.component.spec.ts`)

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';

describe('AuthComponent - Unit', () => {
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
    const registerBtn = fixture.debugElement.queryAll(By.css('.tabs button'))[1];
    registerBtn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isLogin).toBeFalse();
    const fullName = fixture.debugElement.query(By.css('input[name="fullName"]'));
    expect(fullName).not.toBeNull();
  });

  it('disables submit when required fields are empty', () => {
    component.isLogin = true;
    component.email = '';
    component.password = '';
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button.main-btn')).nativeElement;
    expect(btn.disabled).toBeTrue();
  });
});
```

2) Cypress E2E spec snippet (place in `cypress/e2e/auth.spec.cy.js`)

```js
describe('Auth Component - E2E', () => {
  beforeEach(() => cy.visit('/'));

  it('shows title and icon', () => {
    cy.get('.title h1').should('contain', 'Career Compass');
    cy.get('.icon').should('be.visible').and(($el) => {
      expect($el.width()).to.be.greaterThan(30);
    });
  });

  it('toggles to Register and validates fields', () => {
    cy.contains('.tabs button', 'Register').click();
    cy.get('input[name="fullName"]').should('be.visible');
    cy.get('input[name="email"]').type('bad-email').blur();
    cy.contains('Please enter a valid email address.').should('be.visible');
  });
});
```

How to run (commands)
---------------------
- Unit tests (Karma / Jasmine):
```powershell
npm test
```
- E2E (Cypress):
```powershell
npx cypress open
npx cypress run
```

Evidence and reporting
----------------------
- For each manual TC capture a screenshot and log: timestamp, environment, steps, result (pass/fail), and notes.
- For automated runs capture test runner output and screenshots (Cypress can take screenshots on failure).

Appendix
--------
- Include sample snippets above in your report under "Automated Tests".
- If you want I can add the example spec files directly into the repo and/or generate a printable Markdown file with embedded code snippets for copy/paste.

End of test plan
