import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _jwtTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  jwtToken$: Observable<string | null> = this._jwtTokenSubject.asObservable();

  constructor() { }

  setJwtToken(token: string | null): void {
    this._jwtTokenSubject.next(token);
    // Store token in localStorage if needed
    if (token) {
      localStorage.setItem('jwtToken', token);
    } else {
      localStorage.removeItem('jwtToken');
    }
  }

  getJwtToken(): string | null {
    return this._jwtTokenSubject.value;
  }
}
