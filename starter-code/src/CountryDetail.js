import React from "react";
import countriesData from "./countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const countryId = props.match.params.id;

  const country = countriesData.find(el => {
    return el.cca3 === countryId;
  });

  return (
    <div className="col-7" style={{textAlign:"left"}}>
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
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(el => {
                  const borderCountry = countriesData.find(country => {
                    return country.cca3 === el;
                  });
                  return (
                    <li key={el} style={{textAlign: "left"}}>
                      <Link to={`/${el}`} style={{textDecoration: "none"}}>{borderCountry.name.common}</Link>
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

export default CountryDetail;
