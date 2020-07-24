import React from "react";
import countries from "../countries.json";
import { NavLink } from "react-router-dom";

const CountriesList=() =>{
    return (
      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <NavLink
              key={index}
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              {country.name.official}
            </NavLink>
          );
        })}
      </div>
    );
}

export default CountriesList;