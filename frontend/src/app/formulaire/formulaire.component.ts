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

  // nom = '';
  // prenom = '';
  // adresse = '';
  // codePostal = '';
  // ville = '';
  // telephone = '';
  // email = '';
  // civilite = '';
  // password = '';
  // login = '';
  // pays = '';
  // isHidden = true;
  
  // @Output() submit = new EventEmitter<any>();
  
  // sendParent() {
  //   console.log('sendParent');
  //   this.submit.emit({
  //     nom: this.nom,
  //     prenom: this.prenom,
  //     adresse: this.adresse,
  //     codePostal: this.codePostal,
  //     ville: this.ville,
  //     telephone: this.telephone,
  //     email: this.email,
  //     civilite: this.civilite,
  //     password: this.password,
  //     login: this.login,
  //     pays: this.pays,
  //     isHidden: false
  //   });
  // }
}