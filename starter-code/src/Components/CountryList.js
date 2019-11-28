import React from "react";
import "../App.css";
import countries from "../countries";
import { Link } from "react-router-dom";

function CountryList() {
  return (
    <div className="countryList col-5">
      <div className="list-group">
        {countries.map(el => (
          <div>
            <Link
              className="list-group-item list-group-item-action btn"
              to={`/${el.cca3}`}
              data-toggle="buttons"
            >
              <img
                src={`https://www.countryflags.io/${el.cca2.toLowerCase()}/flat/64.png`}
                alt="country flag"
              />
              {el.name.common}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
