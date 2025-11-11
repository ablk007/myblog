'use client';

import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="page-header-title">
                  <h2 className="mb-0">Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="col-md-6 col-xl-3">
        <div className="card bg-primary-dark dashnum-card text-white overflow-hidden">
          <span className="round small"></span>
          <span className="round big"></span>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="avtar avtar-lg">
                  <i className="ti ti-file-text f-35"></i>
                </div>
              </div>
              <div className="col-auto">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent p-0">
                    <h5 className="text-white mb-1">124</h5>
                    <span className="text-white text-opacity-75">Total Posts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3">
        <div className="card bg-success-dark dashnum-card text-white overflow-hidden">
          <span className="round small"></span>
          <span className="round big"></span>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="avtar avtar-lg">
                  <i className="ti ti-check f-35"></i>
                </div>
              </div>
              <div className="col-auto">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent p-0">
                    <h5 className="text-white mb-1">98</h5>
                    <span className="text-white text-opacity-75">Published</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3">
        <div className="card bg-warning-dark dashnum-card text-white overflow-hidden">
          <span className="round small"></span>
          <span className="round big"></span>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="avtar avtar-lg">
                  <i className="ti ti-clock f-35"></i>
                </div>
              </div>
              <div className="col-auto">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent p-0">
                    <h5 className="text-white mb-1">26</h5>
                    <span className="text-white text-opacity-75">Draft</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-3">
        <div className="card bg-secondary-dark dashnum-card text-white overflow-hidden">
          <span className="round small"></span>
          <span className="round big"></span>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="avtar avtar-lg">
                  <i className="ti ti-message f-35"></i>
                </div>
              </div>
              <div className="col-auto">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent p-0">
                    <h5 className="text-white mb-1">342</h5>
                    <span className="text-white text-opacity-75">Comments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5>Recent Blog Posts</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Getting Started with Next.js</td>
                    <td>Admin User</td>
                    <td><span className="badge bg-light-success">Published</span></td>
                    <td>Nov 5, 2025</td>
                    <td>
                      <a href="#" className="avtar avtar-xs btn-link-secondary">
                        <i className="ti ti-eye f-20"></i>
                      </a>
                      <a href="#" className="avtar avtar-xs btn-link-success">
                        <i className="ti ti-edit f-20"></i>
                      </a>
                      <a href="#" className="avtar avtar-xs btn-link-danger">
                        <i className="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Understanding Node.js</td>
                    <td>Admin User</td>
                    <td><span className="badge bg-light-warning">Draft</span></td>
                    <td>Nov 4, 2025</td>
                    <td>
                      <a href="#" className="avtar avtar-xs btn-link-secondary">
                        <i className="ti ti-eye f-20"></i>
                      </a>
                      <a href="#" className="avtar avtar-xs btn-link-success">
                        <i className="ti ti-edit f-20"></i>
                      </a>
                      <a href="#" className="avtar avtar-xs btn-link-danger">
                        <i className="ti ti-trash f-20"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5>Quick Actions</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <Link href="/admin/blog/add" className="btn btn-primary w-100">
                  <i className="ti ti-plus me-2"></i>
                  Add New Post
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/admin/blog" className="btn btn-outline-primary w-100">
                  <i className="ti ti-list me-2"></i>
                  View All Posts
                </Link>
              </div>
              <div className="col-md-4">
                <a href="#" className="btn btn-outline-secondary w-100">
                  <i className="ti ti-settings me-2"></i>
                  Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
