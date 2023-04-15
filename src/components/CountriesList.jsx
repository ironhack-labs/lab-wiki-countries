import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <ul>
      {countries.map(country => (
        <li key={country.alpha3Code}>
          <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
