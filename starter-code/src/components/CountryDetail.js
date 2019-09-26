import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const cca3 = props.match.params.cca3;

  const foundCountry = countries.find(el => {
    return el.cca3 === cca3;
  });

  /*  const borderCountries = countries.find(el => {
    return foundCountry.borders.forEach(country => {
      return country === el.cca3;
    });
  }); */

  const borderCountries = foundCountry.borders.map(countryCode => {
    let borderCountry = countries.find(country => country.cca3 === countryCode);
    return (
      <li>
        <Link to={`/CountryDetail/${borderCountry.cca3}`}>
          {borderCountry.name.common}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borderCountries}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
