import React, { Component } from "react";
import "./App.css";
import CountryList from "./components/Countrylist";
import CountryDetails from "./components/CountryDetails";
import { Switch, Route } from "react-router-dom";
import countriesjson from "./countries.json";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [...countriesjson]
    };
  }
  render() {
    return (
      <div>
        <div className="Navbar">
          <h2 style={{ color: "white" }}> WikiCountries</h2>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-5 scrollbar scrollbar-tempting-azure"
              style={{ height: "90vh", overflow: "scroll" }}
            >
              <CountryList countries={this.state.countries} />
            </div>
            <div className="col-7">
              <Switch>
                <Route
                  path="/:country"
                  render={props => (
                    <CountryDetails
                      {...props}
                      countries={this.state.countries}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
