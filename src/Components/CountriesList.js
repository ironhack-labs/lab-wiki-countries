import React from 'react';
import { NavLink } from "react-router-dom";
import countries from '../countries.json';

function CountriesList(props) {
    return (
        <div className="list-group">
          {countries.map((country) => {
            return (
              <NavLink
                activeClassname="active"
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
                key={country.cca3}
              >
                {country.flag} {country.name.common}
              </NavLink>
            );
          })}
        </div>
      );

}

export default CountriesList; 