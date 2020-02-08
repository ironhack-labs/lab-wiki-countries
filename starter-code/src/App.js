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
  

const countries = () => { 
  const arrayOfCountries = Object.keys(country).map(key => {
    const eachCountry = country[key];
    return (
      <Link className="clearLinkStyle" to={`/country/${eachCountry.key}`}>
        <button type="button" className="btn btn-lg btn-block">
          {eachCountry.flag}
          {eacCountry.name}
        </button>
      </Link>
    );
  });
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
                  name={country.name.common}
                  flag={country.flag}
                />
              ))}
            </div>
          </div>

          <div className="col-7">
            <CountryDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
