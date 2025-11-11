'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminFooter from '@/components/admin/AdminFooter';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Pages that don't need authentication
  const publicPages = ['/admin/login', '/admin/signup', '/admin/password-reset'];
  const isPublicPage = publicPages.includes(pathname);
  
  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    
    if (!token && !isPublicPage) {
      // Not authenticated and trying to access protected page
      router.push('/admin/login');
      return;
    } else if (token && isPublicPage) {
      // Already authenticated and trying to access login page
      router.push('/admin');
      return;
    } else {
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);
  }, [pathname, router, isPublicPage]);
  
  // Pages that don't need the admin layout (header, sidebar, footer)
  if (isPublicPage) {
    return <>{children}</>;
  }
  
  // Show loading state for protected pages only
  if (isLoading || !isAuthenticated) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <AdminSidebar />
      
      <div className="app-content">
        <div className="">
          <AdminHeader />
          
          <main>
            <div className="container-fluid mt-3">
              {children}
            </div>
          </main>
          
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}
