import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>WikiCountries</NavLink>

            </ul>
        </nav>
    )
}

export default Navbar; 