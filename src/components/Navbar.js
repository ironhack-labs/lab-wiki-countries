import { NavLink } from "react-router-dom";
// import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to={`/countries`}><h1>LAB - WikiCountries</h1></NavLink>
        </nav>
    )
}

export default Navbar;