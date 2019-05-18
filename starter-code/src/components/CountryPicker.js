import React, { Component } from "react";

import { Link } from "react-router-dom";

class CountryPicker extends Component {
  state = {};
  render() {
    return (
      <div className="list-group">
        {this.props.countries.map(country => {
          return (
            <Link
              to={`/country/${country.cca3}`}
              key={country.cca3}
              className="list-group-item list-group-item-action"
              onClick={() => {
                this.props.setNewCountry(country.cca3);
              }}
            >
              {country.flag} {country.name.official}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CountryPicker;
