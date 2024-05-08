import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login/login.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  constructor(private http: HttpClient, private LoginService: LoginService, private router:Router) { }

  login(loginData: any) {
    console.log(loginData);

    this.http.post<any>(`${environment.backendClient}/auth/login`, loginData)
      .subscribe(
        response => {
          // Handle successful login response
          console.log('Login successful', response);
          this.LoginService.setJwtToken(response.token);
          this.router.navigate(['/profile'])
        },
        error => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
  }
  
  register(registerData: any) {
    console.log(registerData);

    this.http.post<any>(`${environment.backendClient}/auth/register`, registerData)
      .subscribe(
        response => {
          // Handle successful register response
          console.log('Register successful', response);
          this.LoginService.setJwtToken(response.token);
          this.router.navigate(['/profile'])
        },
        error => {
          // Handle register error
          console.error('Register failed', error);
        }
      );
  }
}