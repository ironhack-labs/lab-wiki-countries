import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-light mb-3">
            <div className= "container">
                <NavLink to="#">LAB - WikiCountries</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;