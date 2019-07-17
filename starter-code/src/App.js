import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CountryItem from "./CountryItem";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import { Switch, Route, Redirect } from "react-router-dom";
import notFound404 from "./notFound404";

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
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  {this.state.countries.map((country, idx) => (
                    <CountryItem key={idx} idx={idx} countryitem={country} />
                  ))}
                </div>
              </div>
              <Switch>
                <Route
                  exact
                  path="/viewCountry/:chosenCountry"
                  render={props => {
                    let chosenCountry = props.match.params.chosenCountry;
                    let filteredArray = this.state.countries.filter(country => {
                      return (
                        country.cca3
                          .toLowerCase()
                          .indexOf(chosenCountry.toLowerCase()) >= 0
                      );
                    });
                    return (
                      <CountryDetail
                        country={filteredArray[0]}
                        allCountries={this.state.countries}
                      />
                    );
                  }}
                />
                <Route component={notFound404} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
