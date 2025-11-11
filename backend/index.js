import express from 'express';
import connectDB from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
//import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', loginRoutes);
// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Blog API',
    status: 'Server is running',
    endpoints: {
      getAllBlogs: 'GET /api/blogs',
      getBlogById: 'GET /api/blogs/:id',
      getBlogBySlug: 'GET /api/blogs/slug/:slug',
      getBlogsByCategory: 'GET /api/blogs/category/:category',
      getBlogsByStatus: 'GET /api/blogs/status/:status',
      createBlog: 'POST /api/blogs',
      updateBlog: 'PUT /api/blogs/:id',
      deleteBlog: 'DELETE /api/blogs/:id'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
