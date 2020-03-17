import React, { useContext } from "react";
import { CountryContext } from "../context/countries.context";
import { NavLink } from "react-router-dom";

export const CountryList = () => {
  const { countries } = useContext(CountryContext);

  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((country, i) => (
          <NavLink
            activeClassName="active"
            key={i}
            to={country.cca3}
            className="list-group-item list-group-item-action"
          >
            {country.flag}
            {country.name.common}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
