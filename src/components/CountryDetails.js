import React from 'react';
import countres from '../countries.json';
import CountriesList from './CountriesList';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const countryCode = props.match.params.countryCode;

  const foundCountry = countres.find((country) => {
    return country.cca3 === countryCode;
  });
  console.log(foundCountry.name.official);

  return (
    <div className="align container">
      <div ClassName="details row">
        <h1>{foundCountry.name.official}</h1>
        <div class="dropdown-divider"></div>

        <div className="row justify-content-inbetween">
          <p className="col">Capital:</p>
          <p className="col"> {foundCountry.capital}</p>
        </div>
        <div class="dropdown-divider"></div>

        <div className="row">
          <p className="col">Area:</p>{' '}
          <p className="col"> {foundCountry.area} m2</p>
        </div>
        <div class="dropdown-divider"></div>

        {foundCountry.borders.length === 0 ? null : (
          <div className="row justify-content-around">
            <p className="col">Borders</p>
            <ul>
              {foundCountry.borders.map((countryCode) => {
                return countres.map((country) => {
                  if (country.cca3 === countryCode) {
                    return (
                      <Link to={`/countries/${country.cca3}`}>
                        <li>{country.name.official}</li>
                      </Link>
                    );
                  }
                });
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
