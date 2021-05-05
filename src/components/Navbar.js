import './Navbar.css'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>Wiki Countries</h1>
            <ul>
                <li><NavLink to="/" exact activeClassName="active-section">Inicio</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar