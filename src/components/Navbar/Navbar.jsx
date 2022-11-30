import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <h2>LAB WikiCountries</h2>
            <ul>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Inicio</NavLink>

            </ul>
        </nav>
    )
}

export default Navbar; 