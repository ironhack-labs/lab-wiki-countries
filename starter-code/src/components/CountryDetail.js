import React, { Component } from "react";

import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {};

  render() {
    // (if no state is set (directly loading url) then update the state first)
    if (!this.props.country) {
      this.props.setNewCountry(this.props.match.params.id);
      return null;
    }

    return (
      <div>
        <h1>{this.props.country.name.official}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.country.area} km²</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {this.props.country.borders && (
                  <ul>
                    {this.props.country.borders.map(border => {
                      return (
                        <li key={border}>
                          <Link
                            to={`/country/${border}`}
                            onClick={() => {
                              this.props.setNewCountry(border);
                            }}
                          >
                            {border}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
