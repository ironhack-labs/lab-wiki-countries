import React from "react";
import { NavLink } from "react-router-dom";
const CountryDetails = props => {
  const id = props.match.params.id;
  const country = props.countries.find(el => el.cca3 === id);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital[0]}</td>
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
                {country.borders.map(item => (
                  <li key={item}>
                    <NavLink to={`/${item}`}>{props.countries.find(el => el.cca3 === item).name.common}</NavLink>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
