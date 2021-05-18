import React from 'react';

import { Link } from 'react-router-dom';

import './CountriesList.css';

export default function CountriesList(props) {
  return (
    <div className="countries-list">
      {props.countries.map((country) => {
        return (
          <Link key={country.cca3} to={`/countries/${country.cca3}`}>
            <h3>
              {country.flag} {country.name.common}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
