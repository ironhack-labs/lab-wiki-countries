import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countriesData }) {
  return (
    <div>
      <h1>CountriesList</h1>
      {countriesData.map((country) => {
        return (
          <div>
            <ul>
              <li>
                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
