import React, { Component } from "react";
import countries from "../countries.json";
import CountryDetails from "./countryDetails";
import { Link, Switch, Route } from "react-router-dom";

class countryList extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="panel panel-primary" id="result_panel">
                <div className="panel-body">
                  <ul className="list-group">
                    {countries.map((elm, idx) => {
                      return (
                        <Link
                          key={idx}
                          to={`/${elm.cca3}`}
                          className="list-group-item"
                        >
                          <h2>
                            {elm.flag}
                            {elm.name.common}
                          </h2>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/:cca3" component={CountryDetails} />
              <CountryDetails />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default countryList;
