import { useState } from 'react';
import countriesFromJson from '../countries.json';
import { Link } from 'react-router-dom';

export function CountriesList(props) {
  
    const { countries } = props

  return (
    <div>
      <ul>
        {countries.map((country) => {
          return (
            <li>
              <Link to={'/' + country.alpha3Code}>
                {country.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
