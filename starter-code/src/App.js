import React from "react";
import "./App.css";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                Los Paises
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  {countries.map(country => (
                    <Link
                      to={"/" + country.cca3}
                      className="list-group-item list-group-item-action"
                    >
                      {country.flag} {country.name.common}
                    </Link>
                  ))}
                </div>
              </div>
              <Switch>
                <Route
                  exact
                  path="/:id"
                  render={props => {
                    console.log(props.match.params.id);
                    let filteredCountry = countries.find(country => {
                      // console.log(country.cca3);

                      return country.cca3 === props.match.params.id;
                    });
                    return (
                      <CountryDetail countries={countries} country={filteredCountry}></CountryDetail>
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
