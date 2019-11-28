import React, { Component } from "react";
import * as data from "../countries.json";
import { Link } from "react-router-dom";

export default class Countrydetails extends Component {
  render() {
    let countries = data.default;
    const myStyle = {
      width: "30%"
    };
    const myCountry = countries.find(
      country => country.cca3 === this.props.match.params.id
    );
    console.log(myCountry);
    return (
      <div className="col-7">
        <h1>{myCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={myStyle}>Capital</td>
              <td>{myCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {myCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {myCountry.borders.map(border => {
                    const country = countries.find(
                      country => border === country.cca3
                    );
                    return (
                      <li>
                        <Link to={`${border}`}>{country.name.common}</Link>
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
