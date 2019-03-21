import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'


const Countries = () => {


  return(
    
    <div>
      
      {countries.map((country, index) => {

        return (
          
            
            <Link className="link-block" key={index} to={`/country-details/${country.cca3}`}><span>{country.flag}</span>{country.name.common}</Link>
          )

      })
    }
    
    </div>
  )

}

export default Countries