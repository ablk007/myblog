import User from "../models/login.js";
import jwt from "jsonwebtoken";

// Login Controller
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ 
        success: false,
        message: "Please provide username and password" 
      });
    }

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false,
        message: "Invalid credentials" 
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role }, 
      process.env.JWT_SECRET || 'your-secret-key-here', 
      { expiresIn: "7d" }
    );

    res.status(200).json({ 
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
};

// Register Controller
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "Please provide all required fields" 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: "Username or email already exists" 
      });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
      role: 'admin'
    });

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role }, 
      process.env.JWT_SECRET || 'your-secret-key-here', 
      { expiresIn: "7d" }
    );

    res.status(201).json({ 
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal server error",
      error: error.message 
    });
  }
};

// Logout Controller
export const logout = async (req, res) => {
  try {
    // Since JWT is stateless, logout is handled on the client side by removing the token
    // This endpoint can be used for any server-side cleanup if needed in the future
    // For now, just send a success response
    
    res.status(200).json({ 
      success: true,
      message: "Logout successful"
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
};
