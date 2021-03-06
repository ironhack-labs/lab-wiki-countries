import { NavLink } from 'react-router-dom'
import CountriesList from './CountriesList'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">WikiCountries</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;