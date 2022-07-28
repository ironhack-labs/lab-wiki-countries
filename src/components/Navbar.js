import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <h1>LAB - WikiCountries</h1>
                <NavLink to="/">Home</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;