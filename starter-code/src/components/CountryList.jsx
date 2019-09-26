import React, { Component } from "react";
import JSONcountries from "./../countries";

import { Link } from "react-router-dom";

export default class CountryDeatil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: JSONcountries
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <ul className="list-group overflow-auto">
            {this.state.countries.map(country => (
              <Link
                key={country.cca3}
                className="list-group-item"
                to={"/" + country.cca3}
              >
                {country.name.common}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
