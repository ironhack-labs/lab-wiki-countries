import { NavLink } from "react-router-dom";


function Navbar () {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" exact to="/">WikiCountries</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;