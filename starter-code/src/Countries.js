import React from "react";
import { Link } from "react-router-dom";

const Countries = props => {
  return (
    <div>
      {props.countries.map((eachCountry, index) => {
        return (
          <Link to={`/${eachCountry.cca3}`}>
            <div
              className="list-group-item list-group-item-action active"
              key={eachCountry.ccn3}
            >
              <p> {eachCountry.name.official} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
