import React from "react";
import { Link } from "react-router-dom";

const CountryBox = props => {
  return (
    <div className="improvedContactCard">
      <Link to={`${props.cca3}`} class="list-group-item list-group-item-action">
        {" "}
        {props.flag} {props.name.common}
      </Link>
    </div>
  );
};

export default CountryBox;
