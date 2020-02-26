import React, { Component } from "react";
import "./App.css";

// import About from "./components/About";
// import Navbar from "./components/Navbar";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetails from "./CountryDetail";
// import { projects as Projects } from "./components/Projects";
// import ProjectDetails from "./components/ProjectDetails";
import countries from "./countries.json";

export default class App extends Component {
  state = {
    countries
  };
  render() {
    return (
      <div className="App">
        <h1>test app</h1>
        {/* <Route
            path="/"
            render={() => {
              let allCountries = this.state.countries;
              // console.log(allCountries);

            }}
          />
         */}
        <div className="App"></div>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  {this.state.countries.map((country, idx) => (
                    <Link
                      className="list-group-item list-group-item-action"
                      key={country.cca3}
                      to={"/" + country.cca3}
                    >
                      {country.flag + country.name.common}
                    </Link>
                  ))}
                  <a
                    className="list-group-item list-group-item-action"
                    href="/ABW"
                  >
                    {" "}
                    Aruba
                  </a>
                </div>
              </div>
              <Switch>
                <Route
                  path="/:cca3"
                  render={props => {
                    let filteredCountries = this.state.countries.filter(
                      country =>
                        // console.log(props.match.params.cca3)
                        // console.log(country.cca3)
                        country.cca3 === props.match.params.cca3
                    );
                    return (
                      <CountryDetails
                        countries={filteredCountries}
                      ></CountryDetails>
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
