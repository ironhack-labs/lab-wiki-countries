const { NavLink } = require("react-router-dom")

function Navbar() {

    return (
        <nav className="Navbar">

            <NavLink to="/">WikiCountries</NavLink>

        </nav>
    )
}

export default Navbar