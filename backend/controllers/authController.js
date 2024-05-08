// controllers/authController.js

const authService = require('../services/authService');

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;
    await authService.register(username, email, password);
    res.status(201).send('User registered successfully');
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  register,
};
