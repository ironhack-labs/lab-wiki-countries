import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <div className="CountriesList">
      <ul>
        {countries.map((country) => {
          console.log(country);
          return (
            <li key={country.name}>
              <Link to={country.alpha3Code}>{country.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
