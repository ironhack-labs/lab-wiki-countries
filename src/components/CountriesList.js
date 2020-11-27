import React from 'react';
import data from '../countries.json';
import CountryDetails from './CountryDetails';
import { Route, Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div>
      <h1>Country Overview</h1>
      <div className="countryWrapper">
        <ul>
          {data.map((country, index) => (
            <li key={index}>
              <Link to={`/countries/${country.cca3}`}>
                {country.flag} {country.name.common}
              </Link>
            </li>
          ))}
        </ul>
        <div className="country-details">
          <Route path="/countries/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
