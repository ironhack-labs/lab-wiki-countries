import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>WikiCountries</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;