import { Injectable } from '@angular/core';

// Reason codes for ending a quiz due to security policy
export type QuizViolationReason = 'TAB_SWITCH' | 'BACK_BUTTON' | 'LEAVE_SCREEN';

@Injectable({ providedIn: 'root' })
export class QuizProtectionService {
  private popstateHandler: ((e: PopStateEvent) => void) | null = null;
  private visibilityHandler: (() => void) | null = null;
  private blurHandler: (() => void) | null = null;
  private pageHideHandler: (() => void) | null = null;
  private violated = false;
  private active = false;
  private violationHandler: ((reason: QuizViolationReason) => void) | null = null;

  startProtection(onViolation: (reason: QuizViolationReason) => void) {
    this.stopProtection();
    this.violated = false;
    this.active = true;
    this.violationHandler = onViolation;

    // Prevent back navigation by pushing extra history states and listening for popstate.
    // Pushing two states makes a single Back press stay on the same logical page
    // while still firing popstate so we can detect and handle the attempt.
    try {
      console.log('[QuizProtection] startProtection: pushing history states and attaching listeners');
    } catch (e) {}
    try {
      history.pushState(null, '', location.href);
    } catch (e) {}
    try {
      history.pushState(null, '', location.href);
    } catch (e) {}

    this.popstateHandler = (e: PopStateEvent) => {
      try { console.warn('[QuizProtection] popstate detected (back/forward attempted)'); } catch (e) {}
      // Immediately re-push state to keep the user on this page and call violation handler once
      try { history.pushState(null, '', location.href); } catch (err) {}
      this.triggerViolation('BACK_BUTTON');
    };
    window.addEventListener('popstate', this.popstateHandler);

    // Page visibility (tab switch or minimize)
    this.visibilityHandler = () => {
      if (document.visibilityState === 'hidden') {
        // User switched tab or minimized window
        this.triggerViolation('TAB_SWITCH');
      }
    };
    document.addEventListener('visibilitychange', this.visibilityHandler);

    // Window blur (losing focus)
    this.blurHandler = () => {
      // As a fallback, treat losing focus as a tab switch / window change
      this.triggerViolation('TAB_SWITCH');
    };
    window.addEventListener('blur', this.blurHandler);

    // Pagehide/unload (navigating away / closing)
    this.pageHideHandler = () => {
      // Navigating away / closing the quiz screen
      this.triggerViolation('LEAVE_SCREEN');
    };
    window.addEventListener('pagehide', this.pageHideHandler);
  }

  private triggerViolation(reason: QuizViolationReason) {
    if (this.violated) return;
    this.violated = true;
    try {
      console.warn('[QuizProtection] violation detected, invoking handler with reason:', reason);
    } catch (e) {}
    try {
      if (this.violationHandler) {
        this.violationHandler(reason);
      }
    } catch (e) {
      try { console.error('[QuizProtection] handler threw', e); } catch (e2) {}
    }
  }

  // Public helper to force a violation from outside (e.g., route guard)
  forceViolation(reason: QuizViolationReason = 'LEAVE_SCREEN') {
    try { console.warn('[QuizProtection] forceViolation called'); } catch (e) {}
    // Force a violation with an explicit reason; component handler (if any) will be invoked
    try { this.triggerViolation(reason); } catch (e) {}
  }

  isActive(): boolean {
    return this.active;
  }

  stopProtection() {
    this.violated = false;
    this.active = false;
    this.violationHandler = null;
    if (this.popstateHandler) {
      window.removeEventListener('popstate', this.popstateHandler);
      this.popstateHandler = null;
    }
    if (this.visibilityHandler) {
      document.removeEventListener('visibilitychange', this.visibilityHandler);
      this.visibilityHandler = null;
    }
    if (this.blurHandler) {
      window.removeEventListener('blur', this.blurHandler);
      this.blurHandler = null;
    }
    if (this.pageHideHandler) {
      window.removeEventListener('pagehide', this.pageHideHandler);
      this.pageHideHandler = null;
    }
    // Try to clean up any extra history states by replacing current state
    try { history.replaceState(null, '', location.href); } catch (e) {}
  }
}
