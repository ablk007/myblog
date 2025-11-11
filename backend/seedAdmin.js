import mongoose from 'mongoose';
import User from './models/login.js';

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/blogsUpdate');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Upsert admin user
const upsertAdminUser = async () => {
  try {
    await connectDB();

    // Admin user data
    const adminData = {
      username: 'admin',
      email: 'admin@blog.com',
      password: 'admin123', // This will be hashed automatically
      role: 'admin'
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: adminData.username });

    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Username:', existingAdmin.username);
      console.log('Email:', existingAdmin.email);
      console.log('Role:', existingAdmin.role);
    } else {
      // Create new admin user
      const admin = await User.create(adminData);
      console.log('Admin user created successfully!');
      console.log('Username:', admin.username);
      console.log('Email:', admin.email);
      console.log('Role:', admin.role);
      console.log('Password: admin123 (use this to login)');
    }

    // Disconnect
    await mongoose.disconnect();
    console.log('\nDatabase disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

// Run the script
upsertAdminUser();
