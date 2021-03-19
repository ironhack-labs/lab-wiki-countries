import React from 'react';
import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countryCode = props.match.params.cca3;

  const foundCountry = countriesJson.find(
    (country) => country.cca3 === countryCode
  );
  console.log(foundCountry);
  return (
    <div style={{ textAlign: 'left' }}>
      {/* <h1>Country Details</h1> */}
      {/* <p>{props.match.params.cca3} </p> */}
      <h1>{foundCountry.name.common} </h1>
      <h3> Capital: {foundCountry.capital} </h3>
      <h3> Area:{foundCountry.area}km </h3>
      <h3> Borders </h3>
      <ul>
        {foundCountry.borders.map((country) => {
          return (
            <li>
              <Link to={`/countries/${country}`}>{country}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
