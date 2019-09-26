import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryList = () => {
  return (
    <>
      <h2>CountryList</h2>
      {/* <div className="container"> */}
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: "scroll" }}
        >
          <div className="list-group">
            {countries.map((country, index) => {
              return (
                <li className="list-style" key={country.cca3}>
                  <Link
                    className="list-group-item list-group-item-action active"
                    to={`/country-detail/${country.cca3}`}
                  >
                    {country.name.official}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CountryList;
