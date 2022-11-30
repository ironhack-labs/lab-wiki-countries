import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
            </div>
        </nav>

    )
}
export default Navbar