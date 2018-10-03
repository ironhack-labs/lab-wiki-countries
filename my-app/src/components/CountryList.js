import React from "react";
import { Link, Route } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail.js";
import "../style.css";

export default class CountryList extends React.Component {
  render() {
    return (
      <div className="container border">
        <div className="list-group">
          <span className="list-group-item list-group-item-action active">
            WikiCountries
          </span>
          <div className="row">
            <div className="col-4 pre-scrollable" style={{maxHeight:"93vh"}}>
              {countries.map(country => (
                <div
                  className="list-group-item list-group-item-action"
                  key={country.name.common}
                >
                  <Link to={"/country/" + country.cca3}>
                    <div>
                      <span>{country.flag}</span>
                      {country.name.common}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-8">
              <Route path="/country/:cca3" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}