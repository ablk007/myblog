'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav>
      <div className="app-logo">
        <Link className="logo d-inline-block" href="/admin">
          <img alt="Logo" src="/assets/images/logo/1.png" />
        </Link>

        <span className="bg-light-primary toggle-semi-nav">
          <i className="ti ti-chevrons-right f-s-20"></i>
        </span>
      </div>
      
      <div className="app-nav" id="app-simple-bar">
        <ul className="main-nav p-0 mt-2">
          <li className="menu-title">
            <span>Dashboard</span>
          </li>
          <li className="no-sub">
            <Link href="/admin">
              <i className="iconoir-home-alt"></i>
              Dashboard
            </Link>
          </li>

          <li className="menu-title">
            <span>Blog Management</span>
          </li>
          <li>
            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#blog-page">
              <i className="iconoir-page"></i>
              Blog Posts
            </a>
            <ul className="collapse" id="blog-page">
              <li><Link href="/admin/blog">All Posts</Link></li>
              <li><Link href="/admin/blog/add">Add New Post</Link></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Tags</a></li>
            </ul>
          </li>

          <li className="menu-title">
            <span>Content</span>
          </li>
          <li className="no-sub">
            <a href="#">
              <i className="iconoir-media-image"></i>
              Media
            </a>
          </li>
          <li className="no-sub">
            <a href="#">
              <i className="iconoir-chat-bubble"></i>
              Comments
              <span className="badge text-warning-dark bg-warning-400 badge-notification ms-2">5</span>
            </a>
          </li>

          <li className="menu-title">
            <span>Settings</span>
          </li>
          <li className="no-sub">
            <a href="#">
              <i className="iconoir-user"></i>
              Users
            </a>
          </li>
          <li className="no-sub">
            <a href="#">
              <i className="iconoir-settings"></i>
              Site Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
