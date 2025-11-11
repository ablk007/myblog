# Blog Admin Frontend - Next.js Setup

This is the frontend admin panel for the blog website, built with Next.js and integrated with your existing HTML admin templates.

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
cd d:\blogInNode\frontend
npm install
```

### 2. Copy Assets (Already Done)

The assets have been copied from the `admin` folder to the `public` folder. If you need to run this again:

```powershell
.\setup-assets.ps1
```

### 3. Run Development Server

```powershell
npm run dev
```

The application will be available at: **http://localhost:3000/admin**

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout
│   │   ├── page.js             # Home page (redirects to /admin)
│   │   └── admin/
│   │       ├── layout.js       # Admin layout with sidebar & header
│   │       ├── page.js         # Dashboard page
│   │       └── blog/
│   │           ├── page.js     # Blog list page
│   │           └── add/
│   │               └── page.js # Add new blog page
│   └── components/
│       ├── Header.js           # Admin header component
│       ├── Sidebar.js          # Admin sidebar navigation
│       └── Footer.js           # Admin footer component
├── public/
│   └── assets/                 # Static assets (CSS, JS, images)
├── admin/                      # Original HTML templates
├── package.json
└── next.config.js
```

## 🎯 Available Routes

- `/admin` - Dashboard
- `/admin/blog` - List all blog posts
- `/admin/blog/add` - Add new blog post

## 🔧 Configuration

### Next.js Config (`next.config.js`)

The configuration is set up to:
- Use JavaScript files (.js, .jsx)
- Enable React strict mode
- Configure image domains

### Package.json Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The admin panel uses:
- Bootstrap 5
- Tabler Icons
- Custom CSS from the admin template

All CSS and JS files are loaded from the `public/assets` folder.

## 📝 Components

### Header.js
- User profile dropdown
- Notifications
- Mobile menu toggle

### Sidebar.js
- Navigation menu
- Blog management links
- Collapsible sections

### Footer.js
- Copyright information
- Footer links

## 🔗 Integration with Backend

To connect with your Node.js/Express backend:

1. Update the API endpoints in your pages
2. Use `axios` (already installed) or `fetch` for API calls
3. Add environment variables in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Example API call:

```javascript
import axios from 'axios';

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};
```

## 🚧 Next Steps

1. **Connect to Backend API**
   - Replace placeholder data with real API calls
   - Implement authentication

2. **Add More Pages**
   - Edit blog post page
   - Categories management
   - User management
   - Media library

3. **Enhance Features**
   - Rich text editor for blog content
   - Image upload functionality
   - Search and filter
   - Pagination

4. **Authentication**
   - Add login/logout functionality
   - Protect admin routes
   - Session management

## 📦 Dependencies

- **next**: ^14.2.15 - React framework
- **react**: ^18.3.1 - UI library
- **react-dom**: ^18.3.1 - React DOM renderer
- **axios**: ^1.7.7 - HTTP client

## 🐛 Troubleshooting

### Assets not loading?
Run the setup script again:
```powershell
.\setup-assets.ps1
```

### Port already in use?
Change the port:
```powershell
npm run dev -- -p 3001
```

### Module not found errors?
Reinstall dependencies:
```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json -Force
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3)

---

**Note**: Make sure your backend server is running before testing API integrations.
