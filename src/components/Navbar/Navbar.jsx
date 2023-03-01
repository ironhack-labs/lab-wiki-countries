import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/countriesList" className={({ isActive }) => isActive ? "selected" : ""}>CountriesList</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;