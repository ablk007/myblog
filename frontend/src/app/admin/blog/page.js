'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { blogAPI } from '@/services/api';
import toast from '@/utils/toast';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getAllBlogs();
      if (response.data.success) {
        setBlogs(response.data.blogs);
      }
    } catch (err) {
      setError('Failed to fetch blogs');
      toast.error('Failed to fetch blogs');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await blogAPI.deleteBlog(id);
      if (response.data.success) {
        toast.success('Blog deleted successfully!');
        fetchBlogs(); // Refresh the list
      }
    } catch (err) {
      toast.error('Failed to delete blog');
      console.error('Error deleting blog:', err);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusBadge = (status) => {
    const badges = {
      published: 'bg-light-success',
      draft: 'bg-light-warning',
      archived: 'bg-light-secondary'
    };
    return badges[status] || 'bg-light-secondary';
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h2 className="mb-0">Blog Posts</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <h5>All Posts ({blogs.length})</h5>
              <Link href="/admin/blog/add" className="btn btn-primary btn-sm">
                <i className="ti ti-plus me-1"></i>
                Add New Post
              </Link>
            </div>
          </div>
          <div className="card-body">
            {loading && (
              <div className="text-center py-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {!loading && !error && blogs.length === 0 && (
              <div className="text-center py-4">
                <p className="text-muted">No blogs found. Create your first blog post!</p>
              </div>
            )}

            {!loading && !error && blogs.length > 0 && (
              <div className="table-responsive">
                <table className="table table-hover" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Views</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr key={blog._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            {/* {blog.featuredImage && (
                              <img src={blog.featuredImage} alt={blog.title} className="img-prod img-fluid" />
                            )} */}
                            <div className="ms-2">
                              <h6 className="mb-0">{blog.title}</h6>
                            </div>
                          </div>
                        </td>
                        <td>{blog.category}</td>
                        <td>{blog.author}</td>
                        <td>
                          <span className={`badge ${getStatusBadge(blog.status)}`}>
                            {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                          </span>
                        </td>
                        <td>{blog.views}</td>
                        <td>{formatDate(blog.createdAt)}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link href={`/admin/blog/add?id=${blog._id}`} className="avtar avtar-xs btn-link-success">
                              <i className="ti ti-edit f-20"></i>
                            </Link>
                            <button 
                              onClick={() => handleDelete(blog._id)} 
                              className="avtar avtar-xs btn-link-danger border-0 bg-transparent"
                            >
                              <i className="ti ti-trash f-20"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
