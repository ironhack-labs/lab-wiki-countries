import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <a class="navbar-brand" href="/">WikiCountries</a>
                <Link to={"/"}>Home</Link>
            </div>
        </nav>
    );
}

export default Navbar;