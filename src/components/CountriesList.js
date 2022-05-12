// diaplays the list of links with the country names, each link should be a react-router-dom link which we will user to send the country code (alpha3Code) via the URL 

import React from 'react'
import {NavLink} from 'react-router-dom'


const CountriesList = (props) => {


console.log(props.countries)

  return (
    <div>
    <h1>CountriesList</h1>
    {props.countries.length > 0 ? props.countries.map((country) => {
        return (
            <div key={country.id} className="link">
            <NavLink to={`/api/countries/${country.alpha3Code}`}>{country.name.common}</NavLink>
            </div>
        )
    }): <p>"Just Loading....."</p>}    


    </div>
    
  )
}

export default CountriesList