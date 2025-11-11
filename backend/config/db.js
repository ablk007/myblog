import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blogsUpdate', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected to blogsUpdate database');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
