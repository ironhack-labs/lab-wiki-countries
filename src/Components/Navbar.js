import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-style">
            <h1>WikiCountries</h1>
            {/* <Link to="/countrieslist"> Countries List </Link> */}
             {/* <ul> */}
                {/* usamos el componente Link en lugar de <a> para escribir nuestros links en la app */}
                {/* <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about" activeStyle={{fontWeight:'bold', color: 'red'}}>About</NavLink></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>  */}
        </nav>
    )
}
export default Navbar