import React from "react";
import data from '../countries';
import { NavLink } from "react-router-dom";


export const  Search = () => {
      return (
        <div className="list-group">
          {data.map(country => (
            <NavLink className="list-group-item list-group-item-action" to={"/" + country.cca3}>
              {country.flag}
              {country.name.official}
            </NavLink>
            ))
          }
        </div>
      );
  }