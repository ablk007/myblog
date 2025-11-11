import express from 'express';
import {
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogsByCategory,
  getBlogsByStatus
} from '../controllers/blogController.js';

const router = express.Router();

// Get all blogs
router.get('/', getAllBlogs);

// Get blogs by status (draft, published, archived)
router.get('/status/:status', getBlogsByStatus);

// Get blogs by category
router.get('/category/:category', getBlogsByCategory);

// Get single blog by slug
router.get('/slug/:slug', getBlogBySlug);

// Get single blog by ID
router.get('/:id', getBlogById);

// Create new blog
router.post('/', createBlog);

// Update blog
router.put('/:id', updateBlog);

// Delete blog
router.delete('/:id', deleteBlog);

export default router;
