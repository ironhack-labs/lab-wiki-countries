import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> LAB - WikiCountries </Link>
        <Link to="/countries">Countries </Link>
      </ul>
      <ul>
        <Link to="/countries">Countries </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
