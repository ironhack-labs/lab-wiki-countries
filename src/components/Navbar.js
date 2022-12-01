import { Link, NavLink } from "react-router-dom";

function Navbar() {
    console.log("c")
    return (
        <nav className="Navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
                WIKI
            </NavLink>
            <Link to="/listCountries">ALL COUNTRIES</Link>
        </nav>
    )
}

export default Navbar;