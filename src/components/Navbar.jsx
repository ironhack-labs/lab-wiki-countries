import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-light fw-bolder">
          React WikiCountries
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar