import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>WikiCountries</NavLink>
                <NavLink to="/countries" className={({ isActive }) => isActive ? "selected" : ""}>Countries List</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar