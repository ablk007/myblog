# Blog Admin Panel

Full-stack blog management system built with Next.js and Express.js

## Features

-  Admin authentication with JWT
-  Blog CRUD operations
-  Protected admin routes
-  Toast notifications
-  Responsive dashboard
-  MongoDB database
-  Modern UI with Bootstrap 5

## Tech Stack

**Frontend:**
- Next.js 14.2.15
- React 18
- Axios
- Bootstrap 5
- Iconoir Icons

**Backend:**
- Node.js
- Express 5
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs

## Installation

### Backend Setup
\\\ash
cd backend
npm install
node index.js
\\\

### Frontend Setup
\\\ash
cd frontend
npm install
npm run dev
\\\

### Create Admin User
\\\ash
cd backend
node seedAdmin.js
\\\

**Default Credentials:**
- Username: admin
- Password: admin123

## Environment Variables

Create \.env.local\ in frontend folder:
\\\
NEXT_PUBLIC_API_URL=http://localhost:5000/api
\\\

## API Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout

### Blogs
- GET /api/blogs
- GET /api/blogs/:id
- POST /api/blogs
- PUT /api/blogs/:id
- DELETE /api/blogs/:id

## License

MIT
