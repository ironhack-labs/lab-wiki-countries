import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList( {countries} ) {
  return (
    <div>
      <ul>
        {countries.map((country, index) => (
          <p key={index}>
          <Link to={`/details/${country.alpha3Code}`} >{country.name.common}</Link>
          </p>

        ))}
      </ul>
    </div>
  )
}
