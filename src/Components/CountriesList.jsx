import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

function CountriesList() {

    return(
        <div>
        {countries.map((country) => (
        <div>
            <Link to={`/${country.cca3}`}> 
            <p>{country.flag} {country.name.common}</p>
            </Link>
        </div>
      ))}
        </div>
    )


}
export default CountriesList
