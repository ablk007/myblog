# Next.js Blog Admin Frontend Setup

This document explains how to set up and run the Next.js admin frontend.

## Project Structure

```
frontend/
├── admin/                  # Original HTML templates
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   ├── js/
│   │   └── vendor/
│   └── template/
├── public/                 # Will be created - Static assets for Next.js
│   └── assets/            # Symlink or copy from admin/assets
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── blog/
│   │   │       ├── add/
│   │   │       │   └── page.tsx
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── AdminLayout.tsx
│       ├── Header.tsx
│       └── Sidebar.tsx
├── package.json
├── tsconfig.json
└── next.config.js
```

## Setup Instructions

### Step 1: Navigate to Frontend Directory
```powershell
cd d:\blogInNode\frontend
```

### Step 2: Copy Assets to Public Folder
The admin template assets need to be accessible in the Next.js public folder.

```powershell
# Create public directory structure
New-Item -ItemType Directory -Force -Path "public"

# Copy assets from admin folder to public folder
# This makes them accessible at /assets/* in Next.js
Copy-Item -Path "admin\assets" -Destination "public\" -Recurse -Force
```

### Step 3: Install Dependencies
```powershell
npm install
```

### Step 4: Run Development Server
```powershell
npm run dev
```

The application will be available at: `http://localhost:3000`

### Step 5: Build for Production (Optional)
```powershell
npm run build
npm start
```

## Available Pages

- **Dashboard**: `http://localhost:3000/`
- **Blog List**: `http://localhost:3000/admin/blog`
- **Add Blog**: `http://localhost:3000/admin/blog/add`

## Key Features

1. **Next.js 14 App Router**: Modern routing with the app directory
2. **TypeScript**: Type-safe code
3. **Server & Client Components**: Optimized rendering
4. **Bootstrap 5**: Responsive UI framework (from original template)
5. **Responsive Design**: Mobile-friendly admin panel

## Integration with Backend

To connect with your Node.js/Express backend:

1. Create an `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

2. Use the API in your components:
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`)
```

## Customization

- **Styling**: Edit `src/app/globals.css` or use the original CSS files
- **Layout**: Modify `src/components/AdminLayout.tsx`
- **Navigation**: Update `src/components/Sidebar.tsx`
- **Header**: Customize `src/components/Header.tsx`

## Notes

- All original HTML template assets are preserved in the `admin/` folder
- The Next.js version uses the same CSS and JavaScript from the original template
- TypeScript errors during development are normal until `npm install` is run
