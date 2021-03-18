import React from 'react';
import countriesJSON from "../countries.json";
import { Link } from "react-router-dom";

const CountriesList = () => {
  return (
    <div class="list-group">
      {countriesJSON.map((country) => {
        return (
          <div key={country.cca3}>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </div>
          );
        })}
      </div>
    );
  };
  

export default CountriesList;
