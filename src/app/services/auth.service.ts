import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check if user is already logged in from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  // Mock login - in real app, would call backend
  login(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      // Simulate API call
      setTimeout(() => {
        const mockToken = 'mock-jwt-token-' + Date.now();
        localStorage.setItem('authToken', mockToken);
        this.isAuthenticatedSubject.next(true);
        observer.next({ success: true, token: mockToken });
        observer.complete();
      }, 500);
    });
  }

  // Mock logout
  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Get auth token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
