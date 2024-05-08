// controllers/authController.js

const authService = require('../services/authService');

async function login(req, res, next) {
  try {
    const { login, password } = req.body;
    const token = await authService.login(login, password);
    return res.status(201).json({ message: 'User logged successfully', token });
  } catch (error) {
    next(error);
  }
}

async function register(req, res, next) {
  try {
    const { nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, password, pays } = req.body;
    await authService.register(nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, password, pays);
    const token = await authService.login(login, password);
    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    next(error);
  }
}

async function session(req, res, next) {
  try {
    const { token } = req.body;
    const session = await authService.session(token);
    return res.status(201).json({ message: 'User session', session });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  register,
  session,
};
