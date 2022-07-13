import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <li>
                    <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-brand" to="/countries">Countries</NavLink>
                </li>

            </div>
        </nav>
    );
}

export default Navbar;