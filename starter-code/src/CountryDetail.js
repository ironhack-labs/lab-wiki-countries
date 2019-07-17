import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    return (
      <div class="col-7">
        <h1>{this.props.country.name.common}</h1>
        <table class="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.country.borders.map((el, idx) => {
                    let foundCountry = this.props.allCountries.filter(
                      country => {
                        console.log(el);
                        return (
                          country.cca3
                            .toLowerCase()
                            .indexOf(el.toLowerCase()) >= 0
                        );
                      }
                    );
                    return (
                      <li style={{ listStyle: "none" }}>
                        <Link to={"/viewCountry/" + el}>
                          {foundCountry[0].name.common}
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
