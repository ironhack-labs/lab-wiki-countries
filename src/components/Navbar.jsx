import { NavLink } from "react-router-dom";

NavLink

function Navbar() {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={"/"} style={{ textDecoration: "none", color: "black" }}> WikiCountries</NavLink>
            </div>
        </nav>

    )
}

export default Navbar;
