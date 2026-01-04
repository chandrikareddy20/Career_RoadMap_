import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  
  showAlert(message: string, title: string = 'Validation Error'): void {
    alert(`${title}\n\n${message}`);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 6;
  }

  validateMaxLength(value: string, max: number): boolean {
    return value.length <= max;
  }

  validateRequired(value: string): boolean {
    return value.trim().length > 0;
  }
}
