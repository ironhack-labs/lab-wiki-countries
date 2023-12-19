import { NavLink } from "react-router-dom";   // <== IMPORT

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <ul>
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        WikiCountries
                    </NavLink>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
