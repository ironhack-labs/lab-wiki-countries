import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <nav>

            <NavLink className="navbar navbar-expand-lg navbar-light bg-light" to="/" >LAB | React WikiCountries</NavLink>
            
        </nav>
    )
}

export default Navbar