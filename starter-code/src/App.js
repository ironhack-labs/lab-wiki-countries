import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
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
            <div className="col-5 list-group">
              {this.state.countries.map((countries, idx) => (
                <CountryList key={idx} {...countries}></CountryList>
              ))}
            </div>

            <Switch>
              <Route
                exact
                path="/:cca3"
                render={props => {
                  let chosenCountry = props.match.params.cca3;
                  let filteredArray = this.state.countries.filter(country =>
                    country.cca3
                      .toLowerCase()
                      .includes(chosenCountry.toLowerCase())
                  );

                  return (
                    <CountryDetail
                      country={filteredArray[0]}
                      allCountries={this.state.countries}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
