import React from "react";
import "../App.css";
import { Link, Route } from "react-router-dom";

import countries from "../countries.json";

export const CountryDetail = props => {
  const { countryId } = props.match.params;

  const getCountryById = cca3Arg => {
    const result = countries.find(country => country.cca3 === cca3Arg);

    return result;
  };

  const countryToDisplay = getCountryById(countryId);

  return (
    <div className="col-7">
      <h1>{countryToDisplay.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{countryToDisplay.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryToDisplay.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                countryToDisplay.borders.map(countryId => {
                  return (
                    <li>
                      <Link to={`/${countryId}`}>
                        {
                        countries.map(country => {
                          if (country.cca3 === countryId) {
                            return <p>{country.name.common}</p>;
                          }
                        })
                        }
                      </Link>
                    </li>
                  );
                })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
