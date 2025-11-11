export default function FrontendFooter() {
  return (
    <footer className="site-footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Blog Website</h5>
            <p>Your source for the latest news and articles</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>&copy; {new Date().getFullYear()} Blog Admin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
