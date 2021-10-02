import React from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';
const CountryDetails = (props) => {
  let currentCountry = countries.find((country) => {
    return country.cca3 === props.match.params.id;
  });

  let bordersCodes = currentCountry.borders;
  console.log('these are the borders codes: ' + bordersCodes);

  let borderCountries = bordersCodes.map((border) => {
    return countries.find((country) => {
      return country.cca3 === border;
    });
  });
  console.log(borderCountries);

  return (
    <div>
      <h1>{currentCountry.name.official}</h1>
      <div>
        <h3>Capital:</h3>
        <h3>{currentCountry.capital}</h3>
        <h3>Area:</h3>
        <p>{currentCountry.area} ㎢</p>
      </div>
      <div>
        <h3>Borders</h3>
        <ul>
          {borderCountries.map((country) => {
            return (
              <li>
                <Link to={`/country-detail/${country.cca3}`}>
                  {country.name.official}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
