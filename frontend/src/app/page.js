export default function Home() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-4 mb-4">Welcome to Blog Website</h1>
        <p className="lead mb-4">Choose your destination:</p>
        
        <div className="row justify-content-center">
          <div className="col-md-5 mb-3">
            <div className="card">
              <div className="card-body p-4">
                <h3 className="card-title">Admin Panel</h3>
                <p className="card-text">Manage your blog posts, users, and settings</p>
                <a href="/admin" className="btn btn-primary">Go to Admin</a>
              </div>
            </div>
          </div>
          
          <div className="col-md-5 mb-3">
            <div className="card">
              <div className="card-body p-4">
                <h3 className="card-title">Public Blog</h3>
                <p className="card-text">Read the latest articles and news</p>
                <a href="/blog" className="btn btn-success">View Blog</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
