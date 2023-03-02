import { NavLink } from "react-router-dom"
import '../../components/App.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>

                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Countries List</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
