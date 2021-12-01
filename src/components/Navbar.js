import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <NavLink to="/" exact className="navbar-brand">
        WikiCountries
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
