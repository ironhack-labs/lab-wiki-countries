import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countryId = props.match.params.id;
  const country = countries.find((country) => country.cca3 === countryId);
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital : {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>
        Borders:
        <ul>
          {country.borders.map((border) => {
            const borderCountry = countries.find(
              (country) => country.cca3 === border
            );
            return (
              <li>
                <Link to={`/${borderCountry.cca3}`} key={borderCountry.cca3}>
                  {borderCountry.name.common}
                </Link>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
};

export default CountryDetails;
