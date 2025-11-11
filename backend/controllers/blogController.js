import Blog from '../models/blogs.js';

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
};

// Get single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message
    });
  }
};

// Get blog by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message
    });
  }
};

// Create new blog
export const createBlog = async (req, res) => {
  try {
    const { title, category, status, tags, featuredImage, content, author } = req.body;

    // Validation
    if (!title || !category || !content) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, category, and content'
      });
    }

    const blog = await Blog.create({
      title,
      category,
      status,
      tags,
      featuredImage,
      content,
      author
    });

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating blog',
      error: error.message
    });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { title, category, status, tags, featuredImage, content, author } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Update fields
    if (title) blog.title = title;
    if (category) blog.category = category;
    if (status) blog.status = status;
    if (tags) blog.tags = tags;
    if (featuredImage) blog.featuredImage = featuredImage;
    if (content) blog.content = content;
    if (author) blog.author = author;

    await blog.save();

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating blog',
      error: error.message
    });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
      error: error.message
    });
  }
};

// Get blogs by category
export const getBlogsByCategory = async (req, res) => {
  try {
    const blogs = await Blog.find({ category: req.params.category }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
};

// Get blogs by status
export const getBlogsByStatus = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: req.params.status }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
};
