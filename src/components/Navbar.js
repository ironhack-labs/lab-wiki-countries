import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <nav>

            <NavLink className="navbar navbar-expand-lg navbar-light bg-light" to="/" > WikiCountries</NavLink>

        </nav>
    )
}

export default Navbar