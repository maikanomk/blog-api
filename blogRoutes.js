// src/routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { createBlog } = require('../controllers/blogController');

// Create a new blog
router.post('/', createBlog);

module.exports = router;
