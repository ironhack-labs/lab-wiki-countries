import { NavLink, Route, Routes } from "react-router-dom";
import CountriesList from "./CountriesList";


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container d-flex justify-content-between">
                    <NavLink to="/" className="navbar-brand" >WikiCountries</NavLink>
                </div>
            </nav>


       
        </div>

    )
}

export default Navbar;