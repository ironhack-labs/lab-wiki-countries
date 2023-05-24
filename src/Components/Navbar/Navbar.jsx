import { NavLink } from "react-router-dom";
import './Navbar.css'

function NavBar() {
    return (
        <nav className="Navbar">
            <h1>
                LAB | React WikiCountries

            </h1>
            {/* <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "selected" : ""}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos" className={({ isActive }) => isActive ? "selected" : ""}>Mis proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/querys?name=Popino&color=Marroncito toffe" className={({ isActive }) => isActive ? "selected" : ""}>Query Strings</NavLink>
                </li>

            </ul> */}
        </nav>
    );
}

export default NavBar;