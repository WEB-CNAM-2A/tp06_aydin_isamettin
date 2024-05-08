import { Component } from '@angular/core';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.css',
  imports: [FormulaireComponent]
})
export class RecapitulatifComponent {
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

  receiveFormData(data: any) {
    // Receive data from child component
    this.nom = data.nom;
    this.prenom = data.prenom;
    this.adresse = data.adresse;
    this.codePostal = data.codePostal;
    this.ville = data.ville;
    this.telephone = data.telephone;
    this.email = data.email;
    this.civilite = data.civilite;
    this.password = data.password;
    this.login = data.login;
    this.pays = data.pays;
    this.isHidden = data.isHidden;
  }

  toggleHidden() {
    this.isHidden = true;
    console.log('toggleHidden');
  }
}
