import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryList = () => {
  return (
    <div id="root">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-5">
              <div class="list-group">
                {countries.map(el => {
                  return (
                    <Link
                      class="list-group-item list-group-item-action"
                      to={`/countries/${el.cca3}`}
                    > 
                      {el.flag}   {el.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
