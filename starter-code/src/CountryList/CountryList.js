import React from "react";
import { NavLink } from "react-router-dom";

const CountryList = ({ countrie, handleChange }) => (
  <NavLink
    className="list-group-item list-group-item-action text-left"
    to={`/${countrie.cca3}`}
    onClick={handleChange}
  >
    {countrie.flag} {countrie.name.common}
  </NavLink>
);

export default CountryList;
