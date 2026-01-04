import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidationHelperService {
  /**
   * Sanitizes user input by removing potentially dangerous characters
   */
  sanitizeInput(input: string): string {
    if (!input) return '';
    
    // Remove HTML tags
    const div = document.createElement('div');
    div.textContent = input;
    let sanitized = div.textContent || '';
    
    // Remove script tags and event handlers
    sanitized = sanitized
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/on\w+='[^']*'/gi, '');
    
    // Trim and limit length
    sanitized = sanitized.trim();
    
    return sanitized;
  }

  /**
   * Validates email format
   */
  isValidEmail(email: string): boolean {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Validates password strength
   */
  validatePassword(password: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!password) {
      errors.push('Password is required');
      return { valid: false, errors };
    }

    if (password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }

    if (password.length > 128) {
      errors.push('Password must be less than 128 characters');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Validates skill name
   */
  validateSkillName(name: string, existingSkills: string[] = []): { valid: boolean; error?: string } {
    if (!name || !name.trim()) {
      return { valid: false, error: 'Skill name is required' };
    }

    const trimmed = name.trim();
    
    if (trimmed.length < 2) {
      return { valid: false, error: 'Skill name must be at least 2 characters' };
    }

    if (trimmed.length > 50) {
      return { valid: false, error: 'Skill name must be less than 50 characters' };
    }

    // Check for duplicates (case-insensitive)
    const lowerExisting = existingSkills.map(s => s.toLowerCase());
    if (lowerExisting.includes(trimmed.toLowerCase())) {
      return { valid: false, error: 'This skill is already added' };
    }

    // Check for potentially malicious content
    if (/<script|javascript:|on\w+=/i.test(trimmed)) {
      return { valid: false, error: 'Invalid characters in skill name' };
    }

    return { valid: true };
  }

  /**
   * Rate limiting helper (client-side, should be enforced server-side too)
   */
  private rateLimitMap = new Map<string, { count: number; resetTime: number }>();

  checkRateLimit(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const record = this.rateLimitMap.get(key);

    if (!record || now > record.resetTime) {
      // Reset or create new record
      this.rateLimitMap.set(key, {
        count: 1,
        resetTime: now + windowMs
      });
      return true;
    }

    if (record.count >= maxAttempts) {
      return false; // Rate limit exceeded
    }

    record.count++;
    return true;
  }

  /**
   * Clears rate limit for a key
   */
  clearRateLimit(key: string): void {
    this.rateLimitMap.delete(key);
  }
}

