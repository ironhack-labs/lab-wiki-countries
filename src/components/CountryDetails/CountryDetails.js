import React, { Component } from "react";
import { render } from "@testing-library/react";

import countries from "../../countries.json";

import "../CountriesList/CountriesList";

import { Switch, Route, Redirect, Link } from "react-router-dom";

class CountryDetails extends Component {
  constructor() {
    super();
  }

  searchCountry = (cca3) => {
    const actualCountry = countries.filter((elm) => elm.cca3 == cca3);
    return actualCountry;
  };

  render() {
    const { cca3 } = this.props.match.params;

    const country = this.searchCountry(cca3);

    return (
      <div className="col-5 scroll">
        {cca3}
        <h1>{country[0].name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>
                {country[0].capital.map((elm) => (
                  <li>{elm}</li>
                ))}
              </td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    {country[0].borders.map((elm) => (
                      <Link to={"/" + elm}> ({elm}) </Link>
                    ))}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
