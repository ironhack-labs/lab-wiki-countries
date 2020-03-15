import React from "react";
import { Link } from "react-router-dom";

export const List = ({ countries }) => {
  return (
    <div className="col-5 mt-5">
      <div className="list-group">
        {countries.map((country, i) => (
          <Link
            to={country.cca3}
            key={i}
            className="list-group-item list-group-item-action"
            data-toggle="list"
          >
            {country.flag}
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};
