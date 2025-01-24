import Logo from "../assets/react.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img src={Logo} alt="Logo" className="d-inline-block align-text-top" />
          WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
