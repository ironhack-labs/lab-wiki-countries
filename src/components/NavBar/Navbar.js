import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
        </nav>
    )
}

export default Navbar