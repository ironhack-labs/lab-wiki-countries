import React from "react";
import { Link, Route } from "react-router-dom";

const List = props => {
  const displayCountries = props.data.map((country, index) => {
    return (
      <li key={index}>
        <Link
          to={`/${country.cca3}`}
          className="list-group-item list-group-item-action"
        >
          {country.flag}
          &nbsp;
          {country.name.common}
        </Link>
      </li>
    );
  });

  return (
    <div className="col-4" style={{ maxHeight: "90vh", overflowY: "scroll" }}>
      <ul className="list-group">{displayCountries}</ul>
    </div>
  );
};

export default List;
