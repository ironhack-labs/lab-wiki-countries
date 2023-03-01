import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/">LAB-WikiCountries</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar