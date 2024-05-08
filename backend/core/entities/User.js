// core/entities/User.js

class User {
    constructor(nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, password, pays) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.ville = ville;
        this.codePostal = codePostal;
        this.telephone = telephone;
        this.email = email;
        this.civilite = civilite;
        this.login = login;
        this.password = password;
        this.pays = pays;
    }
}

module.exports = User;