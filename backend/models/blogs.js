import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  tags: {
    type: [String],
    default: []
  },
  featuredImage: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  author: {
    type: String,
    default: 'Admin'
  },
  slug: {
    type: String,
    unique: true
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create slug from title before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;