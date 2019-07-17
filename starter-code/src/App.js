import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CountryItem from "./CountryItem";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: countries
    };
  }
  render() {
    return (
      <div className="App">
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
              <div className="col-5">
                <div className="list-group">
                  {this.state.countries.map((country, idx) => (
                    <CountryItem key={idx} countryitem={country} />
                  ))}
                </div>
              </div>
              {/* <CountryDetail /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
