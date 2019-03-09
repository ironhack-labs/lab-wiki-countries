import React, { Component } from "react";
import countries from "../countries.json";
import { NavLink } from "react-router-dom";

class CountryList extends Component {
  render() {
    return (
      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <NavLink
              key={index}
              /* si on ne met pas `/$ on aura <a href='FRA'> et non pas <a href='/FRA'> */
              /* le $ permet de dire que ce qui vient après ce $ est une variable et non pas une string (cf ES6 Template Strings) */
              to={`/${country.cca3}`}
              className="list-group-item list-group-item-action"
            >
              {country.name.official}
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default CountryList;
