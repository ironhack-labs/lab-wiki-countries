import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar navbar navbar-dark bg-primary mb-3">
            <ul>
                <Link className="navbar-brand" to="/"> WikiCountries</Link>
            </ul>
        </nav>
    );
}

export default Navbar;