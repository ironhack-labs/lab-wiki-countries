import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1>LAB - WikiCountries</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
