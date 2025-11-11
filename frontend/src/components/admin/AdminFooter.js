export default function Footer() {
  return (
    <footer className="pc-footer">
      <div className="footer-wrapper container-fluid">
        <div className="row">
          <div className="col my-1">
            <p className="m-0">
              Blog Admin &copy; {new Date().getFullYear()} - Made with ♥ by Your Team
            </p>
          </div>
          <div className="col-auto my-1">
            <ul className="list-inline footer-link mb-0">
              <li className="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
