import React from 'react';
import countriesJSON from './../countries.json';

const CountryDetails = (props) => {
  const countryID = props.match.params.name;

  const foundCountry = countriesJSON.find(
    (country) => country.name.common === countryID
  );

  // const

  return (
    <div>
      <h2>{foundCountry.name.common}</h2>
      <p>Capital : {foundCountry.capital}</p>
      <p>Area : {foundCountry.area} km²</p>
      <a href={`/${foundCountry.borders}`}>{foundCountry.borders}</a>
      {/* <p>Borders : {foundCountry.borders}</p> */}
    </div>
  );
};

export default CountryDetails;
