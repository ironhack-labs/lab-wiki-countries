import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/countries-list">
            WikiCountries
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
