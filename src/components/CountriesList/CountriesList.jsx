import React, { useEffect, useState } from "react";
import { fetchCountries } from '../../services/countries-service'
import { Link } from 'react-router-dom'

function CountriesList() {
  const [countries, setCountries] = useState(null)

  useEffect (() => {
    fetchCountries()
      .then((countriesList) => {
        setCountries(countriesList.data)
      })
      .catch((err) => console.log(err))
  }, [countries])

  return ( 

      <ul className="list-group col-4 text-center">
        {!countries ? "Loading..." 
        :
        countries.map( country => { 
        return (  
          <div  key={country.alpha3Code} className="list-group-item ">
          <Link to={country.alpha3Code} style={{display: 'block'}} className="nav-link">{country.name.common}</Link>
          <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="pic"/>
        </div>
        )
        })}
      </ul>

   );
}

export default CountriesList;