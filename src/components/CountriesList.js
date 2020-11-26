import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  return (
    <div>
      <ul>
        {countries.map((country, i) => (
          <li key={i}>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;