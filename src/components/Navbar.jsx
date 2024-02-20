import { Link } from "react-router-dom"; 
function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-primary">
        <Link to="/">
          <h1 className="nav-wiki text-white">WikiCountries</h1>
        </Link>
      </nav>
    )
}

export default Navbar;
