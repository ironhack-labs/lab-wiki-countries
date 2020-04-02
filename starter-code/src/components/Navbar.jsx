import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = ({ countries }) => {
       return (

        <nav className="list-group">
            <ul className="list-group ">
                {countries.map((e, index) => {
                    return <li key={index}><NavLink coja="fasdf"  className="list-group-item list-group-item-action" to={"/"+e.cca3}>{e.flag} {e.name.common}</NavLink></li>
                })}
            </ul>
            </nav>
    )
}

export default Navbar
