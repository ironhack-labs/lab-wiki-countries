import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <ul className=" CountriesList">
      {countries.map((country) => {
        console.log(country);
        return (
          <li key={country.name}>
            <Link to={country.alpha3Code}>
              {' '}
              <img
                src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                alt="country.name"
              />{' '}
              {country.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
