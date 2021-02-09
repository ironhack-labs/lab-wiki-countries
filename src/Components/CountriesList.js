import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'

function CountriesList() {

    return (
        <div className="">
        {countries.map((country) => (
          <div className=" list-group-item list-group-item-action" key={country.cca3}>
            <Link to={`/${country.cca3}`}>
            {country.flag} { country.name.common}
            </Link>
          </div>
        ))}
      </div>

    )
}

export default CountriesList