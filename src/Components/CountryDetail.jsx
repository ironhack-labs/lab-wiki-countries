import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

const CountryDetail = () => {
  //* Trouver les voisins
  const borderCountries = (cca3) =>
    countries.find((country) => country.cca3 === cca3);

  //* Trouver le nom du pays sur la base du CCA3
  const findCountry = (countryId) =>
    countries.find((countryObj) => countryObj.cca3 === this.state.countryId);

  const countryId = props.match.params.countryId;

  return (
    <div>
      <h1>Country details</h1>
      <p>Capital: {findCountry(countryId).capital}</p>
      <p>Area: {findCountry(countryId).area} km2</p>
      <p>Borders:</p>
      <ul>
        {findCountry(countryId).borders.map((border) => {
          return (
            <li key={borderCountries(border).cca3}>
              <Link to={`/countries/${borderCountries(border).cca3}`}>
                {borderCountries(border).name.official}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetail;
