export default function FrontendLayout({ children }) {
  return (
    <div className="frontend-wrapper">
      {/* Add your public-facing header here */}
      <header className="site-header">
        {/* Frontend navigation will go here */}
      </header>

      <main className="site-content">
        {children}
      </main>

      {/* Add your public-facing footer here */}
      <footer className="site-footer">
        {/* Frontend footer content */}
      </footer>
    </div>
  );
}
