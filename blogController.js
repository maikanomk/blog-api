// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  try {
    const { title, description, tags, body } = req.body;
    const { userId } = req.user; // Assuming userId is set in the request object after authentication

    const blog = new Blog({
      title,
      description,
      author: userId,
      tags,
      body
    });

    await blog.save();

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement other CRUD operations here

module.exports = {
  createBlog
};

// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  // Implementation for creating a new blog
};

const getBlogs = async (req, res) => {
  // Implementation for getting a list of blogs
};

const getBlogById = async (req, res) => {
  // Implementation for getting a single blog by ID
};

const updateBlog = async (req, res) => {
  // Implementation for updating a blog by ID
};

const deleteBlog = async (req, res) => {
  // Implementation for deleting a blog by ID
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};

// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  try {
    const { title, description, tags, body } = req.body;
    const { userId } = req.user; // Assuming userId is set in the request object after authentication

    const blog = new Blog({
      title,
      description,
      author: userId,
      tags,
      body
    });

    await blog.save();

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement other CRUD operations here

module.exports = {
  createBlog,
  // Other CRUD operations
};

// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  // Implementation for creating a new blog
};

const getBlogs = async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    // Filtering parameters
    const state = req.query.state || 'published';

    // Ordering parameters
    const sort = req.query.sort || '-timestamp';

    const query = { state };

    const blogs = await Blog.find(query)
      .sort(sort)
      .limit(limit)
      .skip((page - 1) * limit);

    res.status(200).json({ blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement other CRUD operations here

module.exports = {
  createBlog,
  getBlogs,
  // Other CRUD operations
};
// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  // Implementation for creating a new blog
};

const getBlogs = async (req, res) => {
  // Implementation for getting a list of blogs
};

const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement other CRUD operations here

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  // Other CRUD operations
};
// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  // Implementation for creating a new blog
};

const getBlogs = async (req, res) => {
  // Implementation for getting a list of blogs
};

const getBlogById = async (req, res) => {
  // Implementation for getting a single blog by ID
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, description, tags, body } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
      tags,
      body
    }, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement other CRUD operations here

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  // Other CRUD operations
};
// src/controllers/blogController.js
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  // Implementation for creating a new blog
};

const getBlogs = async (req, res) => {
  // Implementation for getting a list of blogs
};

const getBlogById = async (req, res) => {
  // Implementation for getting a single blog by ID
};

const updateBlog = async (req, res) => {
  // Implementation for updating a blog by ID
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
