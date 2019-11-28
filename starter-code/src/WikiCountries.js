import React from "react";
import Countries from "./countries.json";
import { Link } from "react-router-dom";

const WikiCountries = props => {
  console.log(Countries);
  return (
    <div className="col-5">
      <div
        className="list-group"
        style={{ textAlign: "start", overflow: "scroll", height: "80vh" }}
      >
        {Countries.map(value => {
          return (
            <Link
              key={value.ccn3}
              className="list-group-item list-group-item-action"
              to={`/${value.cca3}`}
            >
              {value.flag} {value.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WikiCountries;
