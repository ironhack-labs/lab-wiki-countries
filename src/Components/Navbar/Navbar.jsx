import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'navbar-brand' : '')}
      >
        LAB - WikiCountries
      </NavLink>
    </nav>
  );
}

export default Navbar;
