
import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList({countries}){

  
    return(
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <Link to={`/countries/${country.cca3}`}>
              {/* <CountryDetails math={} location={} history={}/> */}
              <h4>{country.name.common}</h4>
            </Link>
          </li>
         
        ))}
      </ul>
    )
  
}

