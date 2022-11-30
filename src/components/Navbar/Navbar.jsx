import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>React WikiCountries</NavLink>
                {/* <NavLink to="/projects" className={({ isActive }) => isActive ? "selected" : ""}>Proyectos</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""}>Sobre mi</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? "selected" : ""}>Mi perfil *</NavLink>
                <NavLink to="/querys?name=Popino&color=Marroncito toffe" className={({ isActive }) => isActive ? "selected" : ""}>Query Strings</NavLink> */}
            </ul>
        </nav>
    )
}

export default Navbar; 