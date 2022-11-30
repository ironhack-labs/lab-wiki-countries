import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar navbar bg-light">
            <ul>
                <NavLink to="/countries"className="wiki"><strong>LAB - Wiki Countries</strong></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
