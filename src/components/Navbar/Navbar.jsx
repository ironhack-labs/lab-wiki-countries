import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <ul>
<Link to="/search-a-country" className="navbar-brand">
  Search for a Country
</Link>
        </ul>
        <a className="navbar-brand" href="/">
          LAB - WikiCountries
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
