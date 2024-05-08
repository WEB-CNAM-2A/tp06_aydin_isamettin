// services/authService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../data/repositories/userRepository');

async function login(username, password) {
    const user = await userRepository.findByUsername(username);
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    return token;
}

async function register(username, email, password) {
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
        throw new Error('Username is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.create(username, email, hashedPassword);
    return newUser;
}

module.exports = {
    login,
    register,
};
