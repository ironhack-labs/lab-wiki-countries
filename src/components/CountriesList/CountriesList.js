import React from 'react';

import { Link } from 'react-router-dom';

import './CountriesList.css';

function CountriesList({ countries }) {
  // console.log(countries);

  const displayCountries = () => countries.map((country) => <li key={country.cca3}><Link to={`/detail/${country.cca3}`}><span>{country.flag}</span> {country.name.common}</Link></li>)

  return (
    <ul className="list-container">
      {displayCountries()}
    </ul>
  );
}

export default CountriesList;