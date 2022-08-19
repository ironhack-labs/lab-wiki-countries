import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <h2 className="navbar-brand" to="/countries-list">WikiCountries </h2 >
        </div>
      </nav>
  )
}

export default Navbar;