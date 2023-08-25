// Import Link
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link to="/">WikiCountries</Link>
      </div>
    </nav>
  );
}

export default Navbar;
