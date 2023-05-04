import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
        LAB - WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
