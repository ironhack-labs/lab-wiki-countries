import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export const CountryDetail = data => {
  const countriesList = countries;

  const getcca3 = cca3 => countriesList.find(obj => obj.cca3 === cca3);

  const { params } = data.match;

  const country = getcca3(params.cca3);
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <h1>Capital: {country.capital}</h1>
      <h1>
        Area: {country.area} KM<sup>2</sup>
      </h1>
      <h1>Borders:</h1>
      <ul>
        {country.borders.map(countryId => (
          <Link to={`/${countryId}`}>
            <li>
              {countriesList.map(country => {
                if (country.cca3 === countryId) {
                  return country.name.common;
                }
              })}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
