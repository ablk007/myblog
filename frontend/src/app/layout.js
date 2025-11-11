import Script from 'next/script';

export const metadata = {
  title: 'Blog Admin Panel',
  description: 'Admin panel for blog management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/images/logo/favicon.png" type="image/x-icon" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="/assets/vendor/fontawesome/css/all.css" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        {/* Iconoir Icon CSS */}
        <link rel="stylesheet" href="/assets/vendor/ionio-icon/css/iconoir.css" />
        
        {/* Animation CSS */}
        <link rel="stylesheet" href="/assets/vendor/animation/animate.min.css" />
        
        {/* Tabler Icons */}
        <link rel="stylesheet" href="/assets/vendor/tabler-icons/tabler-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
        
        {/* Flag Icons */}
        <link rel="stylesheet" href="/assets/vendor/flag-icons-master/flag-icon.css" />
        
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/bootstrap.min.css" />
        
        {/* Simplebar CSS */}
        <link rel="stylesheet" href="/assets/vendor/simplebar/simplebar.css" />
        
        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        
        {/* Toast Notification CSS */}
        <link rel="stylesheet" href="/assets/css/toast.css" />
      </head>
      <body>
        {children}

        {/* Required JS */}
        <Script src="/assets/js/jquery-3.6.3.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/bootstrap/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
