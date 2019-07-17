import React, { Component } from "react";

import "./App.css";
import countries from "./countries.json";
import { Switch, Route, Redirect } from "react-router-dom";
import CountryDetail from "./countryDetail";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: countries
    };
  }
findBorderCountry(){

}

  render() {
    return (
      <section>
        <div className="row">
          <h1 class="list-group-item list-group-item-action col-12 active">
            WikiCountries
          </h1>
          <div className="list-group-item list-group-item-action col-5">
            {this.state.list.map((country, idx) => (
              <div className="list-group">
                <Link
                  to={"/countries/" + idx}
                  className="list-group-item list-group-item-action"
                >
                  {country.name.common}
                  {country.flag}
                </Link>
              </div>
            ))}
          </div>
          {/* <header className="App-header"> */}
            <Switch>
              <Route
                exact
                path="/countries/:chosenCountry"
                render={props => {
                  var chosenCountry = props.match.params.chosenCountry;
                  return (
                    <CountryDetail country={this.state.list[chosenCountry]} function={this.findBorderCountry()} />
                  );
                }}
              />
            </Switch>
          {/* </header> */}
        </div>
      </section>
    );
  }
}

export default App;
