// src/components/CountryDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [countryCode]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Native name: {country.nativeName}</p>
      <p>Top level domain: {country.topLevelDomain[0]}</p>
      {/* Render additional country details */}
    </div>
  );
}

export default CountryDetails;
