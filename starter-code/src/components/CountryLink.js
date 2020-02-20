import React from "react";
import { Link } from "react-router-dom";

const CountryLink = props => {
  return (
    <Link 
    className="list-group-item list-group-item-action"
    to={`/${props.name}`}
    >
      <span>
        {props.flag} {props.name}{" "}
      </span>
    </Link>
  );
};

export default CountryLink;
