//This is the component that will receive the country code (cca3) in the URL. This is actually the id of the country (example: /ESP for Spain, /FRA for France).
import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  //On créé une fonction pour trouver le pays via son cca3
  let getCountry = (cca3) =>
    countries.find((countryObj) => countryObj.cca3 === cca3);

  const { cca3 } = props.match.params;
  const foundCountry = getCountry(cca3);

  const countryBorders = foundCountry.borders;
  console.log(countryBorders);

  return (
    <div style={{ width: '50%' }}>
      <h2>{foundCountry.name.official}</h2>
      <p>Capital: {foundCountry.capital}</p>
      <p>Area: {foundCountry.area} km2</p>
      <p>
        Borders:
        <ul>
          {countryBorders
            .map((code) => countries.find((country) => code === country.cca3))
            .map((elem, index) => {
              return (
                <li style={{ listStyleType: 'none' }} key={index}>
                  <Link to={`/country/${elem.cca3}`}>{elem.name.common}</Link>
                </li>
              );
            })}
        </ul>
      </p>
    </div>
  );
};

export default CountryDetails;
