// NAVBAR
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/countries">
            WikiCountries
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;