import React from "react";
import { Link } from "react-router-dom";
import CountryList from "./CountryList";
import countries from "../countries.json";
import "bootstrap/dist/css/bootstrap.css";

const CountryDetail = props => {
  const id = props.match.params.id;
  // console.log(props.match.params.id);
  const foundCountry = countries.find(country => {
    return country.cca3 === id;
  });
  console.log(foundCountry);
  return (
    <div key={foundCountry.cca3}>
      <h1>{foundCountry.name.official}</h1>
      <hr />
      <li key={foundCountry.cca3 + foundCountry.capital}>
        <strong>Capital: </strong>
        {foundCountry.capital}
      </li>
      <hr />
      <li key={foundCountry.cca3 + foundCountry.area}>
        <strong>Area: </strong>
        {foundCountry.area} km<sup>2</sup>
      </li>
      <hr />
      <ul key={foundCountry.cca3 + foundCountry.borders}>
        <strong>Borders: </strong>
        {foundCountry.borders.map(border => {
          return (
            <li key={border + foundCountry.cca3}>
              <Link
                to={countries.find(country => {
                  return country.cca3 === border;
                })}
              >
                {border}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetail;
