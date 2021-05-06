// import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
               <NavLink to="/" exact activeClassName="navbar-brand">WikiCountries</NavLink>
            </div>
        </nav>
    )
}
export default Navbar