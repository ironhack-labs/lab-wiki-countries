import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

export default function CountryDetails({ countries, match }) {
  const cca3 = match.params.country;

  const country = countries.find((c) => c.alpha3Code === cca3);

  const borders = (border) => {
    const countryName = countries.find((c) => {
      return c.alpha3Code === border;
    });
    return countryName.name;
  };

  return (
    <div className="CountryDetails">
      <h1>{country.name}</h1>
      <hr />
      <h4>
        Capital: <span id="spanCapital" /> {country.capital}
      </h4>
      <hr />
      <h4>
        Area: <span id="spanArea" /> {country.area} km <sup>2</sup>
      </h4>
      <hr />
      {country.borders.length > 0 && (
        <div className="CountryDetails__borders">
          <h4>Borders: </h4>
          <ul id="borders">
            {country.borders.map((border) => (
              <li>
                <Link to={border}>{borders(border)}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
