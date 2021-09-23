import countries from '../../countries.json'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function CountriesList() {

    const displayCountries = () => {

        return(
            countries.map((country, idx) => {
                return( 
                
                    <div className="row col-6">
                    <NavLink to={`/countryDetails/${country.cca3}`}>

                    <h3>{country.flag}-{country.name.common}</h3>

                    </NavLink>
                    </div>
    
                
                    )
               
            })
        )


    }

    return (
        <div>
            {displayCountries()}
        </div>
    )
}
