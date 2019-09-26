import React, { Component } from "react";
import countries from "./../countries";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.country = null;
    this.state.borders = {
      common: null,
      cca3: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = countries.find(country => country.cca3 === id);
    const borders_cca3 = country.borders;
    const borders = borders_cca3.map(cca3 => {
      return {
        common: countries.find(country => country.cca3 === cca3).name.common,
        cca3: cca3
      };
    });
    // const borders = { common: borders_common, cca3: borders_cca3 };
    console.log(borders);
    return { ...state, country, borders };
  }

  render() {
    return (
      <div>
        <h1>{this.state.country.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>Capital</th>
              <td>{this.state.country.capital.join(", ")}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>
                {this.state.country.area} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <th>Neighbors</th>
              <td>
                <ul className="list-unstyled">
                  {this.state.borders.map(neighbor => {
                    return (
                      <li>
                        <Link to={neighbor.cca3}>{neighbor.common}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        {/* {JSON.stringify(this.state.country)} */}
      </div>
    );
  }
}
