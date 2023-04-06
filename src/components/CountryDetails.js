import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countries } = props;
  const { alpha3Code } = useParams();
  const [country] = countries.filter(
    (country) => country.alpha3Code === alpha3Code
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      {/* Add more country details here */}
    </div>
  );
}

export default CountryDetails;
