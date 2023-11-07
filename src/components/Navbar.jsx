import { Link } from "react-router-dom";

// Create a NavBar component
function Navbar() {
    return(
        <div>
            <nav id="nav-bar">
                <div>
                    <p>WikiCountries</p>
                </div>
                <div>
                    <Link to="/">HomePage</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
