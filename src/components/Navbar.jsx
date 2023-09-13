import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/countries">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
