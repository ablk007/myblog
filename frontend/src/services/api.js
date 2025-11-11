import axios from 'axios';

// API Base URL - Change this when going live
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor (for adding auth tokens)
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token to requests if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (for handling errors globally)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Blog API methods
export const blogAPI = {
  // Get all blogs
  getAllBlogs: () => apiClient.get('/blogs'),

  // Get blog by ID
  getBlogById: (id) => apiClient.get(`/blogs/${id}`),

  // Get blog by slug
  getBlogBySlug: (slug) => apiClient.get(`/blogs/slug/${slug}`),

  // Get blogs by category
  getBlogsByCategory: (category) => apiClient.get(`/blogs/category/${category}`),

  // Get blogs by status
  getBlogsByStatus: (status) => apiClient.get(`/blogs/status/${status}`),

  // Create new blog
  createBlog: (blogData) => apiClient.post('/blogs', blogData),

  // Update blog
  updateBlog: (id, blogData) => apiClient.put(`/blogs/${id}`, blogData),

  // Delete blog
  deleteBlog: (id) => apiClient.delete(`/blogs/${id}`),
};

export const authAPI = {
  // Login
  login: (credentials) => apiClient.post('/auth/login', credentials),

  // Register
  register: (userData) => apiClient.post('/auth/register', userData),

  // Logout
  logout: () => apiClient.post('/auth/logout'),
};
// Export the axios instance for custom requests
export default apiClient;
