import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">WikiCountries</Link>
            </div>
        </nav>
    )
}

export default Navbar;
