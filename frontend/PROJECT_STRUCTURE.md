# Project Structure Guide

## Overview
This Next.js application has two separate sections:
1. **Admin Panel** - For managing blog content
2. **Public Frontend** - For displaying blog posts to visitors

## Folder Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout (shared CSS/JS)
│   │   ├── page.js                # Landing page with links to admin/blog
│   │   │
│   │   ├── admin/                 # Admin Panel Routes
│   │   │   ├── layout.js          # Admin-specific layout
│   │   │   ├── page.js            # Admin dashboard
│   │   │   └── blog/
│   │   │       ├── page.js        # Blog list
│   │   │       └── add/
│   │   │           └── page.js    # Add new blog
│   │   │
│   │   └── (frontend)/            # Public Frontend Routes (optional grouping)
│   │       ├── layout.js          # Frontend-specific layout
│   │       └── page.js            # Public homepage
│   │
│   └── components/
│       ├── admin/                 # Admin-only components
│       │   ├── AdminHeader.js
│       │   ├── AdminSidebar.js
│       │   └── AdminFooter.js
│       │
│       └── frontend/              # Public-facing components
│           ├── FrontendHeader.js
│           └── FrontendFooter.js
│
├── public/
│   └── assets/                    # Static assets (CSS, JS, images)
│
└── admin/                         # Original HTML templates (reference)
```

## Routes

### Admin Routes (Protected)
- `/admin` - Dashboard
- `/admin/blog` - Blog post list
- `/admin/blog/add` - Add new blog post
- `/admin/blog/edit/[id]` - Edit blog post (to be implemented)

### Public Routes
- `/` - Landing/Home page
- `/blog` - Public blog listing (to be implemented)
- `/blog/[slug]` - Single blog post (to be implemented)
- `/about` - About page (to be implemented)
- `/contact` - Contact page (to be implemented)

## Component Usage

### Admin Components
```javascript
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminFooter from '@/components/admin/AdminFooter';
```

### Frontend Components
```javascript
import FrontendHeader from '@/components/frontend/FrontendHeader';
import FrontendFooter from '@/components/frontend/FrontendFooter';
```

## CSS Organization

### Admin Styles
- Uses the admin template CSS from `/public/assets/`
- Bootstrap 5 components
- Custom admin theme

### Frontend Styles
- Can use the same Bootstrap or create custom styles
- Add frontend-specific CSS in `/public/assets/css/frontend.css`

## Next Steps

### For Admin Panel:
1. ✅ Dashboard - Done
2. ✅ Blog List - Done
3. ✅ Add Blog - Done
4. ⬜ Edit Blog - To implement
5. ⬜ Delete Blog - To implement
6. ⬜ Categories Management
7. ⬜ User Management
8. ⬜ Authentication

### For Public Frontend:
1. ⬜ Blog listing page
2. ⬜ Single blog post page
3. ⬜ Blog categories page
4. ⬜ Search functionality
5. ⬜ About page
6. ⬜ Contact page

## Development

```bash
# Start development server
npm run dev

# Access Admin Panel
http://localhost:3000/admin

# Access Public Site
http://localhost:3000/
```

## Notes

- Admin and frontend components are completely separated
- Shared resources (CSS, images) are in `/public/assets/`
- API calls should be organized in `/src/utils/api/` (to be created)
- Use environment variables for API endpoints
