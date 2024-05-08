// services/authService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../data/repositories/userRepository');

async function login(login, password) {
    const user = await userRepository.findByLogin(login);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordValid) {
        const error = new Error('Invalid login or password');
        error.status = 401;
        throw error;
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    return { token }; // Return token with success status code
}

async function register(nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, password, pays) {
    const existingLogin = await userRepository.findByLogin(login);
    const existingEmail = await userRepository.findByEmail(email);
    if (existingLogin) {
        throw new Error('Login is already taken');
    }
    if (existingEmail) {
        throw new Error('Email is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.create(nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, hashedPassword, pays);
    return { newUser }; // Return token with success status code
}

async function session(token) {
    const decodedToken = jwt.verify(token, 'your-secret-key');
    const user = await userRepository.findById(decodedToken.userId);
    return { user }; // Return user with success status code
}

module.exports = {
    login,
    register,
    session,
};
