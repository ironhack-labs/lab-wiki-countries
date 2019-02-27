import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import allCountries from "./countries.json";
import CountryDetail from "./CountryDetail";

function countryUrl(country) {
  // return the URL string with the country's ID
  return `/country/${country.cca3}`;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { countryArray: allCountries };
  }

  render() {
    const { countryArray } = this.state;

    return (
      <div className="App ">
        <header className="Header">
          <h5>WikiCountries</h5>
        </header>
        <div className="container-fluid">
          <div className="row">
            <aside className="col-5">
              <h4>Country List</h4>

              <nav class="list-group">
                {countryArray.map(oneCountry => {
                  return (
                    <NavLink key={oneCountry.cca3} to={countryUrl(oneCountry)}>
                      {oneCountry.name.common}
                    </NavLink>
                  );
                })}
              </nav>
            </aside>

            <main className="col-7">
              <h4>Country Detail</h4>
              <Switch>
                <Route path="/country/:countryId" component={CountryDetail} />{" "}
              </Switch>
            </main>
          </div>{" "}
          {/* close row */}
        </div>{" "}
        {/* close container-fluid */}
      </div> // close App
    );
  }
}

export default App;
