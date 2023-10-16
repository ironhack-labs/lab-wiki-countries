import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex">
                <Link to="/" className="nav-link">WikiCountries</Link>
            </div>
        </nav>
    );
}

export default Navbar;
