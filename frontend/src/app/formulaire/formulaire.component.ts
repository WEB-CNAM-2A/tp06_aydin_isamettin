import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  nom = '';
  prenom = '';
  adresse = '';
  codePostal = '';
  ville = '';
  telephone = '';
  email = '';
  civilite = '';
  password = '';
  login = '';
  pays = '';
  isHidden = true;
  
  @Output() submit = new EventEmitter<any>();
  
  sendParent() {
    console.log('sendParent');
    this.submit.emit({
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      codePostal: this.codePostal,
      ville: this.ville,
      telephone: this.telephone,
      email: this.email,
      civilite: this.civilite,
      password: this.password,
      login: this.login,
      pays: this.pays,
      isHidden: false
    });
  }

}
