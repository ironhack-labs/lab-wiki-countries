import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export default class AllCountries extends Component {
  state = {
    countries
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="lis" />
            {this.state.countries.map((country, i) => (
              <Link key={country.cca3} to={`/${country.cca3}`}>
                <button
                  className="list-group-item list-group-item-action"
                  style={{ textAlign: "left" }}
                >
                  {country.flag} {country.name.common}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
