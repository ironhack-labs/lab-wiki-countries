import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";

class App extends Component {
  constructor() {
    super();
    this.countries = {
      list: [...countries]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll", width: "1000px" }}
            >
              <div className="list-group">
                {this.countries.list.map((country, idx) => {
                  return (
                    <div
                      className="list-group-item list-group-item-action"
                      key={idx}
                    >
                      {" "}
                      <Link to={"/country/" + country.cca3}>
                        <span role="img" aria-label={country.name.common}>
                          {country.flag}
                        </span>{" "}
                        {country.name.common}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/country/:chosenCountry"
                render={props => {
                  let chosenCountry = props.match.params.chosenCountry;
                  let filteredArray = this.countries.list.filter(country => {
                    return (
                      country.cca3
                        .toLowerCase()
                        .indexOf(chosenCountry.toLowerCase()) >= 0
                    );
                  });
                  return (
                    <CountryDetail
                      country={filteredArray[0]}
                      allCountries={this.countries.list}
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
