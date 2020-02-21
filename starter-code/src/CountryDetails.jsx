import React from "react";
import { Link } from "react-router-dom";
// import countries from "./countries.json";

export default function CountryDetails(props) {
  const {
    match: {
      params: { code }
    },
    countries
  } = props;

  const getCountryObject = countryCode => {
    return countries.find(e => countryCode === e.cca3);
  };

  const getCountryName = countryCode => {
    return getCountryObject(countryCode).name.common;
  };

  const {
    name: { common },
    capital,
    area,
    borders
  } = getCountryObject(code);

  return (
    <div>
      <h1>{common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map((el, i) => (
                  <li key={i}>
                    <Link to={el}>{getCountryName(el)}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
