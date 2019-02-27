import React, { Component } from "react";

import "./CountryDetail.css";
import allCountries from "./countries.json";

class CountryDetail extends Component {
  render() {
    // this.props.match contains information about the ROUTE
    console.log(this.props.match);

    // match is a props sent AUTOMATICALLY by the React router
    const { params } = this.props.match;

    // search for the project in the array
    const countryItem = allCountries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    return (
      <div className="CountryDetail">
        {countryItem ? (
          <table>
            <thead>
              <tr>
                <th colSpan="2">{countryItem.name.common}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{countryItem.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryItem.area} km²</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {countryItem.borders.map(countryBorder => {
                    const country = allCountries.find(oneCountry => {
                      return oneCountry.cca3 === countryBorder;
                    });
                    return <li key={countryBorder}>{country.name.common}</li>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Country Not Found</p>
        )}{" "}
      </div>
    );
  }
}

export default CountryDetail;
