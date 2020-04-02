import React from "react";
import { NavLink } from "react-router-dom";

const CountryList = props => {
    return (
        <NavLink
        className="list-group-item list-group-item-action country-menu"
        // onClick={() => props.activeLink(props.country.cca3)}
        to={`/${props.country.cca3}`}
        activeClassName="active"
      >
        {props.country.flag} {props.country.name.official}
      </NavLink>
  );
};

export default CountryList;

