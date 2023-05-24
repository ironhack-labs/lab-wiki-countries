import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return(
        <nav className="navbar bg-dark mb-3">
        <div className="container" id="navBar__container">
          <NavLink to={`/`} className="navbar-brand text-secondary" id="navBar__link">WikiCountries</NavLink>
        </div>
      </nav>
    )
}