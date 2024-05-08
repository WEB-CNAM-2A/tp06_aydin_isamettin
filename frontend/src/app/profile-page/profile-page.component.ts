import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { User } from '../models/models/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  jwtToken: string | null = null;
  constructor(private http: HttpClient, private authService: LoginService, private router: Router) { }
  User: any = {};

  ngOnInit(): void {
    this.authService.jwtToken$.subscribe(token => {
      this.jwtToken = token;
    });
    this.getProfileData();
  }

  getProfileData() { // use route /session with POST method and use the JWT token in the body
    this.http.post<any>(`${environment.backendClient}/auth/session`,  this.jwtToken )
      .subscribe(
        response => {
          // Handle successful profile response
          console.log('Profile data', response);
          this.User = response.session;
          console.log(this.User.user);
        },
        error => {
          // Handle profile error
          console.error('Profile failed', error);
          console.log(this.User);
        }
      );
  }
}
