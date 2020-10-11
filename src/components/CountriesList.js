import React from 'react';
import { Link } from 'react-router-dom';
import './CountryList.css'

function CountriesList(props) {
  return (
    <div className="list">
      {props.countries.map((country) => (
        <ul>
          <li className="country">
            <p>{country.flag}</p>
            <Link to={`/country-details/${country.name.official}`} key={country.cca2}>
              {country.name.official}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default CountriesList;