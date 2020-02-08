import React, { Component } from "react";
import countriesImport from "../countries.json";

const CountryDetails = props => {
  const { params } = props.match;
  const country = countriesImport.filter(country => country.cca3 === params.id);

  console.log(country);

  // const borderList = country.map(countryBorders => {
  //   return countryBorders.borders;
  // });

  return (
    <div>
      <h2>{country[0].name.common}</h2>
      <h3>Capital: {country[0].capital}</h3>
      <h3>Area: {country[0].area} km2</h3>
      <ul>
        {country[0].borders.map(countryBorders => (
          <li> {countryBorders}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetails;
