import React from 'react'
import './countryDetail.css'
import { NavLink } from 'react-router-dom'



const CountryCard = ({ cca3, name, flag }) => {

    return (
        <>
            <NavLink exact to={cca3} className="list-group-item list-group-item-action">{flag}<span> | </span>{name.common}</NavLink>
        </>
    )
}

export default CountryCard