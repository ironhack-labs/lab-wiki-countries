import React from "react";
import countries from "./../countries.json";
import {Link} from 'react-router-dom';

export default function CountryList(props) {
  return (
    <div>
      <h2>List of Countries:</h2>
      <ul>
        {countries.map(country => {
          return (
          <li key={country.cca3}>
            <Link to={country.cca3}> {country.name.official}</Link>
            </li>
        );
    })}
      </ul>
    </div>
  );
}
