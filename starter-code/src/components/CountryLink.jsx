import React from "react";
import { Link } from "react-router-dom";

const CountryLink = ({ path, flag, name }) => (
  <Link className="list-group-item list-group-item-action" to={path}>
    {flag}
    {name}
  </Link>
);

export default CountryLink;
