import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">WikiCountries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
