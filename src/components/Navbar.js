import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand" >LAB - WikiCountries</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;