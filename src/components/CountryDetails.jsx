import React, { Component } from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';
import '../App.css';

const CountryDetails = (props) => {
  const foundCountry = countriesJSON.find((country) => {
    return country.cca3 === props.match.params.cca3;
  });

  return (
    <div>

      <h1 className="countryName">{foundCountry.name.official}</h1>
      <h3 className="countryCapital">Capital : {foundCountry.capital || 'no capital'}</h3>
      <h3 className="countryArea">Area : <span>{foundCountry.area.toLocaleString()} km2</span></h3>
      <article className="countryBorders">
        <h3 className="countryBordersTitle">Borders :</h3>
        <ul>
          {foundCountry.borders.map((border) => {
            const matchCountry = countriesJSON.find(
              (country) => country.cca3 === border
            );

            return (
              <li key={matchCountry.cca3} className="singleCountryBorder">
                <Link
                  to={`/countries/${matchCountry.cca3}`}
                >
                  {matchCountry.name.official}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default CountryDetails;
