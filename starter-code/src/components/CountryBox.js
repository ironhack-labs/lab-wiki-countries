import React from "react";
import { NavLink } from "react-router-dom";

const CountryBox = props => {
  return (
    <NavLink to={`/${props.cca3}`}>
      <div className="list-group-item list-group-item-action">
        <img
          src={`https://www.countryflags.io/${props.flag}/flat/64.png`}
          alt=""
          style={{ height: "20px" }}
        />
        {props.name}
      </div>
    </NavLink>
  );
};

export default CountryBox;
