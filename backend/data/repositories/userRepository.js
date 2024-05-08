// data/repositories/userRepository.js

const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '..', 'users.json');

function getAll() {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(usersData);
}

function findByUsername(username) {
  const users = getAll();
  return users.find(user => user.username === username);
}

function findById(id) {
  const users = getAll();
  return users.find(user => user.id === id);
}

function create(username, email, password) {
  const users = getAll();
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password,
  };
  users.push(newUser);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  return newUser;
}

module.exports = {
  getAll,
  findByUsername,
  findById,
  create,
};
