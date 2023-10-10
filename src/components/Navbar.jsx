import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="Navbar">
        <Link to="/" className="Link">WikiCountries</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
