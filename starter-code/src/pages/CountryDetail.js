import React from "react";
import { Borders } from "../components/Borders";

export const CountryDetail = ({ match, countryData }) => {
  const { cca3 } = match.params;
  const country = countryData.filter(country => country.cca3 === cca3)[0];
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td width="30%">Capital</td>
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
              {country.borders.length === 0 ? (
                <div className="alert alert-danger" role="alert">
                  This country has not borders!
                </div>
              ) : (
                <Borders country={country} countryData={countryData}/>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
