import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <NavLink to="/" className="navbar-brand">WikiCountries</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

