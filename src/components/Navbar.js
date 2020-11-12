import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                {/* usamos el componente Link en lugar de <a> para escribir nuestros links en la app */}
                Home - Lab Wiki Countries
            </ul>
        </nav>
    )
}

export default Navbar
