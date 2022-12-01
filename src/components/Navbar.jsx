import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          WikiCountries
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
