'use client';

import { useRouter } from 'next/navigation';
import { authAPI } from '@/services/api';
import toast from '@/utils/toast';

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call logout API
      await authAPI.logout();
      
      // Clear token from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Show success message
      toast.success('Logged out successfully');
      
      // Redirect to login page
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <header className="header-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-4 d-flex align-items-center header-left p-0">
            <span className="header-toggle me-3">
              <i className="iconoir-view-grid"></i>
            </span>
          </div>

          <div className="col-6 col-sm-8 d-flex align-items-center justify-content-end header-right p-0">
            <ul className="d-flex align-items-center">

              {/* Weather Widget */}
              <li className="header-cloud">
                <a aria-controls="cloudoffcanvasTops" className="head-icon"
                   data-bs-target="#cloudoffcanvasTops" data-bs-toggle="offcanvas"
                   href="#" role="button">
                  <i className="iconoir-dew-point text-primary f-s-26 me-1"></i>
                  <span className="f-w-600">26 <sup className="f-s-10">°C</sup></span>
                </a>
              </li>

              {/* Language Selector */}
              <li className="header-language">
                <div className="flex-shrink-0 dropdown" id="lang_selector">
                  <a aria-expanded="false" className="d-block head-icon ps-0"
                     data-bs-toggle="dropdown"
                     href="#">
                    <div className="lang-flag lang-en ">
                      <span className="flag rounded-circle overflow-hidden">
                        <i className=""></i>
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu language-dropdown header-card border-0">
                    <li className="lang lang-en selected dropdown-item p-2" data-bs-placement="top"
                        data-bs-toggle="tooltip" title="US">
                      <span className="d-flex align-items-center">
                        <i className="flag-icon flag-icon-usa flag-icon-squared b-r-10 f-s-22"></i>
                        <span className="ps-2">English</span>
                      </span>
                    </li>
                    <li className="lang lang-pt dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="FR">
                      <span className="d-flex align-items-center">
                        <i className="flag-icon flag-icon-fra flag-icon-squared b-r-10 f-s-22"></i>
                        <span className="ps-2">Française </span>
                      </span>
                    </li>
                    <li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="UK">
                      <span className="d-flex align-items-center">
                        <i className="flag-icon flag-icon-gbr flag-icon-squared b-r-10 f-s-22"></i>
                        <span className="ps-2">English</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Search */}
              <li className="header-searchbar">
                <a aria-controls="offcanvasRight" className="d-block head-icon"
                   data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas"
                   href="#" role="button">
                  <i className="iconoir-search"></i>
                </a>
              </li>

              {/* Apps Shortcut */}
              <li className="header-apps">
                <a aria-controls="appscanvasRights" className="d-block head-icon"
                   data-bs-target="#appscanvasRights" data-bs-toggle="offcanvas"
                   href="#" role="button">
                  <i className="iconoir-key-command"></i>
                </a>
              </li>

              {/* Shopping Cart */}
              <li className="header-cart">
                <a aria-controls="cartcanvasRight" className="d-block head-icon position-relative"
                   data-bs-target="#cartcanvasRight"
                   data-bs-toggle="offcanvas"
                   href="#" role="button">
                  <i className="iconoir-shopping-bag"></i>
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">4</span>
                </a>
              </li>

              {/* Dark/Light Mode Toggle */}
              <li className="header-dark">
                <div className="sun-logo head-icon">
                  <i className="iconoir-sun-light"></i>
                </div>
                <div className="moon-logo head-icon">
                  <i className="iconoir-half-moon"></i>
                </div>
              </li>

              {/* Notifications */}
              <li className="header-notification">
                <a aria-controls="notificationcanvasRight"
                   className="d-block head-icon position-relative"
                   data-bs-target="#notificationcanvasRight"
                   data-bs-toggle="offcanvas"
                   href="#"
                   role="button">
                  <i className="iconoir-bell"></i>
                  <span className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower"></span>
                </a>
              </li>

              {/* Profile */}
              <li className="header-profile dropdown">
                <a className="d-block head-icon dropdown-toggle" 
                   href="#" 
                   role="button" 
                   id="profileDropdown" 
                   data-bs-toggle="dropdown" 
                   aria-expanded="false"
                   style={{ cursor: 'pointer' }}>
                  <img alt="avtar" className="b-r-50 h-35 w-35 bg-dark"
                       src="/assets/images/avtar/woman.jpg" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end header-card border-0 shadow" 
                    aria-labelledby="profileDropdown"
                    style={{ 
                      minWidth: '220px !important',
                      marginTop: '0.5rem !important',
                      right: '20px !important',
                      left: '110px !important',
                      top: '40px !important',
                      zIndex: 9999
                    }}>
                    <li>
                      <a className="dropdown-item" href="/admin">
                        <i className="iconoir-home me-2"></i>
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin/profile">
                        <i className="iconoir-user me-2"></i>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin/settings">
                        <i className="iconoir-settings me-2"></i>
                        Settings
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        <i className="iconoir-log-out me-2"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
