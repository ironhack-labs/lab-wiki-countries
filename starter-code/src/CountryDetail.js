import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./countries";

let nameList = "";

export default class CountryDetail extends Component {
  render() {
    const countryInfo = data.find(el => {
      return el.cca3 === this.props.match.params.id;
    });

    let border = countryInfo.borders.map(border => {
      data.find(el => {
        if (el.cca3 === border) {
          return (nameList = el.name.common);
        }
      });
      return (
        <li>
          <Link to={`/countryDetail/${border}`}>{nameList}</Link>
        </li>
      );
    });
    console.log(border);

    return (
      <div className="countryDetails">
        <div id="root">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <h1>{countryInfo.name.common}</h1>
                  <table className="table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{countryInfo.capital}</td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>
                          {countryInfo.area} km
                          <sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>Borders</td>
                        <td>
                          <ul>{border}</ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
