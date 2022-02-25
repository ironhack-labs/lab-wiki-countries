import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <h3>LAB - WikiCountries</h3>
            <Link to={'/'}>Back to List</Link>
        </nav>
    );
}

export default Navbar;
