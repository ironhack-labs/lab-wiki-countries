import { Link } from "react-router-dom";

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">LAB - WikiCountries</Link>
      </div>
    </nav>
   )
}

export default Navbar;