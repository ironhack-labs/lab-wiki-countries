import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {

  return (
    <>
      {
        countries?.map((country) => (
          <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country.alpha3Code} >
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
              style={{width: '5%', marginRight: '10px'}} 
              alt={country.name.official} 
            />
            {country.name.common}
          </Link>
        ))
      }
    </>
  )
}
