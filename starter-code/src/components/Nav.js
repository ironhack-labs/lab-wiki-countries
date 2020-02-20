import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({countries}) {
    return (
        <nav className="nav">
            
    { countries.map( ({flag, cca3, name: {common}}) => <NavLink to={`/${cca3}`}><span role="image" aria-label={cca3}>{flag}</span>{common}</NavLink>)}
            
        </nav>
    )
}

export default Nav
