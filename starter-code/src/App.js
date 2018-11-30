import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import countries from "./countries.json";
import CountryList from "./CountryList/CountryList";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5 list-countries">
                <div className="list-group">
                  {countries.map((countrie, i) => (
                    <CountryList
                      key={i}
                      countrie={countrie}
                      handleChange={this.handleChange}
                    />
                  ))}
                </div>
              </div>
              <Router />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
