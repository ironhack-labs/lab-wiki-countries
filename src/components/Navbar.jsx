import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar navbar-dark bg-primary mb-3">
            <div className="conainer">
                <NavLink to="/" className="navbar-brand" >
                    WikiCountries
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;