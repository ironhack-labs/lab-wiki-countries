import React from 'react';
import countriesData from '../countries.json';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  console.log(alpha3Code);

  if (!countries || countries.length === 0) return null;

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === alpha3Code;
  });

  return (
    <div>
      <h2>{foundCountry.name.official}</h2>
      <h3>{foundCountry.capital}</h3>
      <p>{foundCountry.area}</p>
      <p>
        {foundCountry.borders.map((alpha3Code) => (
          <p>
            <Link to={`/countries/${alpha3Code}`}>{alpha3Code}</Link>
          </p>
        ))}
      </p>
    </div>
  );
}

export default CountryDetails;
