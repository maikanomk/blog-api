// src/services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET, JWT_EXPIRATION } = process.env;

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

const loginUser = async (email, password) => {
  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    // Generate JWT token
    const token = generateToken(user);

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  loginUser
};
