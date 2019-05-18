import React, { Component } from "react";
import CountryPicker from "./components/CountryPicker.js";
import CountryDetail from "./components/CountryDetail.js";
import { Route, Switch } from "react-router-dom";

import countries from "./countries.json";
import "./App.css";

class App extends Component {
  state = {
    currentCountry: null
  };

  setNewCountry = countryCCA3 => {
    let cObject = countries.find(country => {
      return country.cca3 === countryCCA3;
    });
    this.setState({
      currentCountry: cObject
    });
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary text-white">
          WikiCountries
        </nav>
        <div className="content-container">
          <div className="row">
            <div className="col-5 content-container-country-list">
              <CountryPicker
                countries={countries}
                setNewCountry={this.setNewCountry}
              />
            </div>
            <Switch>
              <Route
                exact
                path="/country/:id"
                render={props => (
                  <div className="col-7">
                    <CountryDetail
                      {...props}
                      country={this.state.currentCountry}
                      setNewCountry={this.setNewCountry}
                    />
                  </div>
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
