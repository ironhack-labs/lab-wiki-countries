import React from "react";
import { NavLink } from 'react-router-dom';

export const CountyList = ({ countryData }) => {
  return (
    <div className="col-5" maxheight="90vh" overflow="scroll">
      <div className="list-group">
        {countryData.map(country => (
          <NavLink
            key={country.name.official}
            className="list-group-item list-group-item-action"
            to={"/"+country.cca3}
          >
            <span>{country.flag}</span>
            {country.name.official}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
