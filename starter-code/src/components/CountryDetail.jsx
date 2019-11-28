import React from "react";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const countryId = props.match.params.id;

  const country = props.countries.find(el => {
    return el.cca3 === countryId;
  });

  const borders = country.borders.map(el => {
    return (
      <li key={el}>
        <Link to={`/${el}`}>
          {props.countries.find(country => country.cca3 === el).name.common}
        </Link>
      </li>
    );
  });

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
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
              <ul>{borders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
