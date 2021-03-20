import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  return (
    <ul>
      {countries.map((eachCountry, idx) => (
        <li>{eachCountry.name.common}</li>
      ))}
    </ul>
  );
}

export default CountriesList;
