import React, { useContext } from "react";
import { CountryContext } from "../context/countries.context";
import { Link } from "react-router-dom";

export const CountryDetails = props => {
  const { countries } = useContext(CountryContext);
  const countryCode = props.match.params.cca3;
  const country = countries.filter(c => c.cca3 === countryCode)[0];
  const countryName = country.name.common;
  console.log("COUNTRY", country, "COUNTRY CODE", countryCode);

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
              <ul>
                {country.borders.map(border => {
                  const countryBorder = countries.filter(c => c.cca3 === border)[0];
                  console.log("COUNTRY BORDER", countryBorder);

                  return (
                    <li>
                      <Link to={border}>{countryBorder.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
