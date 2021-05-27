import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      <h1>Countries</h1>

      {props.countries.map((country) => {
        return (
          <div key={country.cca3} className="singleCountryList">
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
