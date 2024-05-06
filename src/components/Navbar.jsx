import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <Link to={'/'}>
                <h1
                    style={{ marginLeft: '20px', color: 'white', fontSize: "23px" }}>
                    WikiCountries
                </h1>
            </Link>
        </nav>
    )
}

export default Navbar;
