'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { blogAPI } from '@/services/api';
import toast from '@/utils/toast';

export default function AddBlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id'); // Get id from URL query (?id=xxx)
  
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    status: 'draft',
    tags: '',
    featuredImage: '',
    author: 'Admin'
  });

  // Check if editing mode
  const isEditMode = !!blogId;

  // Fetch blog data if editing
  useEffect(() => {
    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  const fetchBlogData = async () => {
    try {
      setFetchingData(true);
      const response = await blogAPI.getBlogById(blogId);
      
      if (response.data.success) {
        const blog = response.data.blog;
        setFormData({
          title: blog.title,
          category: blog.category,
          content: blog.content,
          status: blog.status,
          tags: blog.tags.join(', '), // Convert array to string
          featuredImage: blog.featuredImage || '',
          author: blog.author
        });
      }
    } catch (error) {
      toast.error('Failed to load blog data');
      console.error('Error fetching blog:', error);
    } finally {
      setFetchingData(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.category || !formData.content) {
      toast.error('Please fill all required fields!');
      return;
    }

    try {
      setLoading(true);
      
      // Convert tags string to array
      const blogData = {
        ...formData,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : []
      };

      let response;
      
      if (isEditMode) {
        // Update existing blog
        response = await blogAPI.updateBlog(blogId, blogData);
        if (response.data.success) {
          toast.success('Blog updated successfully!');
        }
      } else {
        // Create new blog
        response = await blogAPI.createBlog(blogData);
        if (response.data.success) {
          toast.success('Blog created successfully!');
        }
      }
      
      setTimeout(() => {
        router.push('/admin/blog');
      }, 1000);
      
    } catch (error) {
      toast.error(`Failed to ${isEditMode ? 'update' : 'create'} blog. Please try again.`);
      console.error('Error saving blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (fetchingData) {
    return (
      <div className="row">
        <div className="col-12 text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading blog data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h2 className="mb-0">{isEditMode ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h5>Post Details</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label className="form-label">Title <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter blog title" 
                    required 
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Category <span className="text-danger">*</span></label>
                  <select 
                    className="form-select"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="technology">Technology</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="news">News</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Status</label>
                  <select 
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">Tags</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Enter tags separated by commas (e.g., javascript, react, nextjs)" 
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">Featured Image</label>
                  <input 
                    type="file" 
                    className="form-control" 
                    accept="image/*"
                    onChange={(e) => setFormData(prev => ({...prev, featuredImage: e.target.files[0]}))}
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">Content <span className="text-danger">*</span></label>
                  <textarea 
                    className="form-control" 
                    rows="10"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your blog content here..." 
                    required
                  ></textarea>
                  <small className="form-text text-muted">
                    You can use Markdown formatting
                  </small>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={() => router.push('/admin/blog')}
                  disabled={loading}
                >
                  <i className="ti ti-x me-1"></i>
                  Cancel
                </button>
                <div>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        {isEditMode ? 'Updating...' : 'Creating...'}
                      </>
                    ) : (
                      <>
                        <i className="ti ti-device-floppy me-1"></i>
                        {isEditMode ? 'Update Blog' : 'Create Blog'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
