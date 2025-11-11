'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/services/api';
import toast from '@/utils/toast';

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await authAPI.login({
        username: formData.username,
        password: formData.password
      });
      
      if (response.data.success) {
        // Save token and user data to localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Show success message
        toast.success('Login successful!');
        
        // Redirect to admin dashboard
        router.push('/admin');
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="app-wrapper d-block">
      <div className="main-container">
        <div className="container">
          <div className="row sign-in-content-bg">
            
            {/* Left Side - Image */}
            <div className="col-lg-6 image-contentbox d-none d-lg-block">
              <div className="form-container">
                <div className="signup-content mt-4">
                  <span>
                    <img alt="Logo" className="img-fluid" src="/assets/images/logo/1.png" />
                  </span>
                </div>

                <div className="signup-bg-img">
                  <img alt="Login" className="img-fluid" src="/assets/images/login/01.png" />
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="col-lg-6 form-contentbox">
              <div className="form-container">
                <form className="app-form rounded-control" onSubmit={handleSubmit}>
                  <div className="row">
                    
                    <div className="col-12">
                      <div className="mb-5 text-center text-lg-start">
                        <h2 className="text-primary-dark f-w-600">Welcome To axelit!</h2>
                        <p>Sign in with your data that you entered during your registration</p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input 
                          className="form-control" 
                          id="username" 
                          name="username"
                          placeholder="Enter Your Username"
                          type="text"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password</label>
                        <a className="link-primary-dark float-end" href="/admin/password-reset">
                          Forgot Password?
                        </a>
                        <input 
                          className="form-control" 
                          id="password" 
                          name="password"
                          placeholder="Enter Your Password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check mb-3">
                        <input 
                          className="form-check-input" 
                          id="rememberMe" 
                          name="rememberMe"
                          type="checkbox"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <label className="form-check-label text-secondary" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <button 
                          className="btn btn-light-primary w-100" 
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Signing In...
                            </>
                          ) : (
                            'Sign In'
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="text-center text-lg-start">
                        Don't Have Your Account yet? {' '}
                        <a className="link-primary-dark text-decoration-underline" href="/admin/signup">
                          Sign up
                        </a>
                      </div>
                    </div>

                    <div className="app-divider-v justify-content-center">
                      <p>Or sign in with</p>
                    </div>

                    <div className="col-12">
                      <div className="text-center">
                        <button className="btn btn-light-facebook icon-btn b-r-22 m-1" type="button">
                          <i className="ti ti-brand-facebook"></i>
                        </button>
                        <button className="btn btn-light-gmail icon-btn b-r-22 m-1" type="button">
                          <i className="ti ti-brand-google"></i>
                        </button>
                        <button className="btn btn-light-github icon-btn b-r-22 m-1" type="button">
                          <i className="ti ti-brand-github"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}