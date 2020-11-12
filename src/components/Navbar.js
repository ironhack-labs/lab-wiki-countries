import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                {/* usamos el componente Link en lugar de <a> para escribir nuestros links en la app */}
                {<h1>WIKIWIKI MOLA MOGOLLON</h1>}
                <li><Link to="/countrieslist">Countries List</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar