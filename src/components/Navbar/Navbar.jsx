import { NavLink } from "react-router-dom";



function Navbar() {
    return (
        <nav className="Navbar">
            <h5>LAB - WikiCountries.</h5>
            <ul>
                {/* <NavLink to="/">WikiCountries</NavLink> */}
                <NavLink to="/">Countries</NavLink>
            </ul>

        </nav>
    )
}
export default Navbar; 