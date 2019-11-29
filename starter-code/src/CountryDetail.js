import React from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const country = countries.find(el => el.cca3 === props.match.params.id);
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
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countries.map((el, index) => {
                  if (country.borders.includes(el.cca3)) {
                    return (
                      <li key={index}>
                        <Link to={`/countries/${el.cca3}`}>
                          {el.name.common}
                        </Link>
                      </li>
                    );
                  }
                  return <div key={index}></div>;
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
