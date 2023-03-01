import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/CountriesList" className={({ isActive }) => isActive ? "selected" : ""}>CountriesList</NavLink>
                </li>


            </ul>
        </nav>
    );
}

export default Navbar;