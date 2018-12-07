import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryList extends Component {
  render() {
    // console.log("props", this.props.countries);
    return (
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">
          {this.props.countries === undefined ? (
            <div>please wait...</div>
          ) : (
            this.props.countries.map(country => {
              return (
                <Link
                  key={country.cca3}
                  className="list-group-item list-group-item-action"
                  to={`/country/${country.name.common}`}
                >
                  {country.flag} {country.name.common}
                </Link>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default CountryList;
