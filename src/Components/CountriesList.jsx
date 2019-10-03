import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CountriesList extends Component {
  mappedCountries = () => {
    const classList = "list-group-item list-group-item-action text-left";
    return this.props.countries.map((each, i) => {
      return (
        <NavLink
          key={i}
          to={`/${each.cca3}`}
          className={classList}
          activeClassName="active"
        >
          {each.flag} {each.name.common}
        </NavLink>
      );
    });
  };

  render() {
    return (
      <div className="col-5 countries-column">
        <div className="list-group">{this.mappedCountries()}</div>
      </div>
    );
  }
}

export default CountriesList;
