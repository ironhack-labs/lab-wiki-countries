// components/Navbar.js

import React from 'react'

import { Link } from 'react-router-dom'

const CountriesList = props => {


    return (
        
        <>
            <Link to={`/country/${props.name}/${props.capital}/${props.area}/${props.borders}`} className="list-group-item list-group-item-action">{props.flag} {props.name}</Link> 
        </>
               
         
    )
}

export default CountriesList;