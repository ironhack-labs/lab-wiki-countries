import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

export default function CountryDetails({ countries, match }) {
  const cca3 = match.params.country;

  const country = countries.find((c) => c.alpha3Code === cca3);

  return (
    <div className="CountryDetails">
      <h1>{country.name}</h1>
      <br />
      <h2>Capital: {country.capital}</h2>
      <br />
      <h3>
        Area: {country.area} km <sup>2</sup>
      </h3>
      <br />
      <h3>Borders: </h3>
      <ul>
        {country.borders.map((border) => (
          <li>
            <Link to={border}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
