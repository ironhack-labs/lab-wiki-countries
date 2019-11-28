import React, { Component } from "react";
import { Link } from "react-router-dom";

import countries from "./countries.json";

class CountryDetail extends Component {
  render() {
    const country = countries.find(el => {
      return el.cca3 === this.props.match.params.cca3;
    });
    return (
      <div className="col-7">
        <h1 style={{ textAlign: "start" }}>{country.name.common}</h1>
        <table className="table" style={{ textAlign: "start" }}>
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
                  {country.borders.map(el => {
                    return (
                      <li key={el}>
                        <Link to={`/${el}`}>
                          {countries.find(c => c.cca3 === el).name.common}
                        </Link>
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
  }
}

export default CountryDetail;
