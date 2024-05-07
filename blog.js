// src/models/blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  state: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  readCount: {
    type: Number,
    default: 0
  },
  readingTime: {
    type: Number
  },
  tags: [String],
  body: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
