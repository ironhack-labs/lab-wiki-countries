import React, { Component } from "react";
import countries from "../countries.json";
import { Switch, Route, Link } from "react-router-dom";

const CountryDetail = props => {
  const countryCode = props.match.params.cca3;
  const countryToRender = countries.find(el => el.cca3 === countryCode);
  const borderingCountries = countryToRender.borders.map(cca3Border => {
    const found = countries.find(
      currentCountry => cca3Border === currentCountry.cca3
    );
    console.log(found);
    const name = found.name.common;
    const linkAddress = `/${found.cca3}`;
    return (
      <li key={found.cca3}>
        <Link to={linkAddress}>{name}</Link>
      </li>
    );
  });

  return (
    <div className="col-7">
      <h1>{countryToRender.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryToRender.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryToRender.area} Kms
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borderingCountries}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
