import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar">

            <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>LAB-WikiCountries</NavLink>

        </nav>
    );
}

export default Navbar;