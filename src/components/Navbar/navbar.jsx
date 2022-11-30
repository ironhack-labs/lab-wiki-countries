import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Wiki List
                </NavLink>
            </div>
        </nav>
    );
};
export default Navbar;