import React from "react";
import "./App.css";
import countries from "./countries.json";
import { Switch, Route } from "react-router-dom";
import Country from "./Country";
import CountryDetail from "./CountryDetail";

class App extends React.Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  {this.state.countries.map((country, idx) => (
                    <Country
                      key={idx}
                      id={country.cca3}
                      flag={country.flag}
                      name={country.name.official}
                    ></Country>
                  ))}
                </div>
              </div>

              <Switch>
                <Route
                  exact
                  path="/:id"
                  render={props => {
                    let foundCountryArr = this.state.countries.filter(
                      country => country.cca3 === props.match.params.id
                    );
                    return (
                      <CountryDetail
                        name={foundCountryArr[0].name.official}
                        capital={foundCountryArr[0].capital[0]}
                        area={foundCountryArr[0].area}
                        borders={foundCountryArr[0].borders}
                      ></CountryDetail>
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
