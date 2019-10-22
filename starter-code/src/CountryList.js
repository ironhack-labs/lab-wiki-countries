import React, { Fragment } from "react";
import countries from "./countries.json";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import CountryDetails from './CountryDetails';

const CountryList = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ overflow: "scroll", height: "90vh" }}>
            <div className="list-group">
              {countries.map((country, index) => {
                return (
                  <Link
                    key={index}
                    className="list-group-item list-group-item-action"
                    to={country.cca3}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
          <CountryDetails />
        </div>
      </div>
      
    </Fragment>
  );
};

export default CountryList;
