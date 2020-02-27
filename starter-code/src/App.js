import React from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail.js";
import "./App.css";

export default class App extends React.Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <h1 className="navbar-brand">WikiCountries</h1>
          </div>
        </nav>
        <section className="home">
          <div className="allCountries">
            {this.state.countries.map((country, idx) => {
              return (
                <Link
                  key={idx}
                  className="list-group-item list-group-item-action"
                  to={"/" + country.cca3}
                >
                  {country.flag + " " + country.name.common}
                </Link>
              );
            })}
          </div>
          <div className="countryDetails">
            <Switch>
              <Route
                path="/:cca3"
                render={props => {
                  let filteredCountry = this.state.countries.filter(country => country.cca3 === props.match.params.cca3);
                  return (
                    <CountryDetail
                      name={filteredCountry[0].name.common}
                      capital={filteredCountry[0].capital}
                      area={filteredCountry[0].area}
                      borders={filteredCountry[0].borders}
                      flag={filteredCountry[0].flag}
                      countries={this.state.countries}
                    ></CountryDetail>
                  )
                }}
              />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}
