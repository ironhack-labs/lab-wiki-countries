import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import countriesArray from "../src/countries.json";

import CountryDetail from "./component/CountryDetail.js";
import "./App.css";

function countryUrl(oneCountry) {
  return `/countries/${oneCountry.cca3}`
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countriesArray
    };
  }

  render() {
    const { countries } = this.state;

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
                class="col-5" /* style="max-height: 90vh; overflow: scroll;" */
              >
                <div class="list-group">
                  <ul>
                    {countries.map(oneCountry => {
                      return (
                        <li key={oneCountry.cca3}>
                          <Link to={countryUrl(oneCountry)}
                            class="list-group-item list-group-item-action" >
                            <p> {oneCountry.flag}
                          {oneCountry.name.common}</p>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* <CountryDetail /> */}

              <Route path="/countries/:countryCca3" component={CountryDetail} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
