import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const BorderLink = props => {
  const { country } = props;
  return country.borders.map((item, index) => {
    const country = countries.find(el => el.cca3 === item);
    return (
      <li key={index}>
        <Link to={`/${item}`}>{country.name.official}</Link>
      </li>
    );
  });
};

const CountryDetail = props => {
  const countryId = props.match.params.id;

  const country = countries.find(el => el.cca3 === countryId);

  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <BorderLink country={country} />
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
