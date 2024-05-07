// src/controllers/authController.js
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = process.env;

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({ firstName, lastName, email, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement login function here

module.exports = {
  register
};

// src/controllers/authController.js
const authService = require('../services/authService');

const register = async (req, res) => {
  // Implementation for register function
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Log user in
    const token = await authService.loginUser(email, password);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  register,
  login
};
