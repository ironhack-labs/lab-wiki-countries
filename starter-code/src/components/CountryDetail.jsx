import React, { useContext } from "react";
import { CountryContext } from "../context/countries.context";
import { Link } from "react-router-dom";

export const CountryDetails = props => {
  const { getCountry } = useContext(CountryContext);
  const countryCode = props.match.params.cca3;
  const country = getCountry(countryCode);

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
                {country.borders.map((border, i) => {
                  const countryBorder = getCountry(border);
                  return (
                    <li key={i}>
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
