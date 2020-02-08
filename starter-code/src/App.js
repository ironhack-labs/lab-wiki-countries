import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import countriesImport from "../src/countries.json";
import Countries from "./comps/Countries";
import CountryDetails from "./comps/CountryDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countriesImport
    };
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.state.countries.map(country => (
                <Countries
                  key={country.cca3}
                  url={country.cca3}
                  name={country.name.common}
                  flag={country.flag}
                />
              ))}
            </div>
          </div>

          <div className="col-7">
            <Route path="/country/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
