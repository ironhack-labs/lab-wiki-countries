import React, { useState } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export default function CountryDetail(props) {
  const countryCode = props.match.params.CountryDetail;
  const country = countries.filter(country => {
    return country.cca2 === countryCode;
  })[0];

  function fromCodeToCountry(cca3) {
    const country = countries.filter(country => {
      return country.cca3 == cca3;
    })[0];
    return country;
  }

  return (
    <div className="country-details">
      <h1 className="country-title">{country.name.common}</h1>
      <hr />
      <div className="capital">
        <h2>Capital</h2>
        <p>{country.capital}</p>
      </div>
      <hr />
      <div className="area">
        <h2>Area</h2>
        <p>{country.area}</p>
      </div>
      <hr />
      <div className="borders">
        <h2>Borders</h2>
        <ul className="border-countries">
          {country.borders.map((border, index) => {
            return (
              <li className="border-links">
                <Link to={`/${fromCodeToCountry(border).cca2}`} key={index}>
                  {fromCodeToCountry(border).name.common}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
