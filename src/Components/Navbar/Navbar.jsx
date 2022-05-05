import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-primary mb-3 p-5">
            <div className="container">
                <NavLink to="/" className={"navi"}>WikiCountries</NavLink>
            </div>
        </nav >
    )
}

export default Navbar