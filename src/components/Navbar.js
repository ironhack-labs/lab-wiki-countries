
import { NavLink } from 'react-router-dom'

const Navbar = () => {


    return (

        <nav class="navbar navbar-light bg-light">
            <NavLink class="link" to="/" exact >WikiCountries</NavLink>
        </nav>

    )
}

export default Navbar