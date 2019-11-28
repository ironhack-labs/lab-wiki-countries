import React from "react";
import "../App.css";
import CountryBorders from "./CountryBorders";
import countries from "../countries";

const CountryDetail = props => {
  const countryId = props.match.params.cca3;
  const country = countries.find(el => {
    return el.cca3 === countryId;
  });
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km <sup>2</sup>
            </td>
          </tr>
          <CountryBorders borders={country.borders} />
        </tbody>
      </table>
    </div>
  );
};
export default CountryDetail;
