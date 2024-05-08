// data/repositories/userRepository.js

const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '..', 'users.json');

function getAll() {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(usersData);
}

function findByLogin(login) {
  const users = getAll();
  return users.find(user => user.login === login);
}

function findById(id) {
  const users = getAll();
  return users.find(user => user.id === id);
}

function findByEmail(email) {
  const users = getAll();
  return users.find(user => user.email === email);
}

function create(nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, hashedPassword, pays) {
  const users = getAll();
  const newUser = {
    id: users.length + 1,
    nom,
    prenom,
    adresse,
    ville,
    codePostal,
    telephone,
    email,
    civilite,
    login,
    password: hashedPassword,
    pays,
  };
  users.push(newUser);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  return newUser;
}

module.exports = {
  getAll,
  findByLogin,
  findByEmail,
  findById,
  create,
};
