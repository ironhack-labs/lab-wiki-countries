import React from 'react'
import { Link } from 'react-router-dom'


function CountriesList( {countries} ) {
  return (
    <div>
      Countries List
      { countries && countries.map( elm => {

        return (
        <div>
          <div>

            <Link to={`/countrydetails/${elm.cca3}`}>{elm.name.common}</Link>

          </div>
        </div>
        )
      })
      }
    </div>
  )
}

export default CountriesList