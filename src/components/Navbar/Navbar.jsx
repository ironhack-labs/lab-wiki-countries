import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <Link to="/" >LAB - WikiCountries</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;