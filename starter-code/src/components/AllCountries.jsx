import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export default class AllCountries extends Component {
  render() {
    return (
      <div className="col-4" id="allCountries">
        <div className="list-group">
          {countries.map((country, i) => {
            return (
              <div key={i} className="list-group-item list-group-item-action">
                {country.flag}
                <Link to={`/country/${country.cca3}`}>
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
