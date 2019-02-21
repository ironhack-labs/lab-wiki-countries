import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import "bootstrap/dist/css/bootstrap.css";

function countryAddress(country) {
  console.log("CLICKED COUNTRY: ", country.name.common);
  console.log("COUNTRY CODE: ", country.cca3);

  return `/${country.cca3}`;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: countries
    };
  }

  render() {
    const { allCountries } = this.state;

    // console.log(allCountries);
    return (
      <div className="App">
        <header className="App-header">WikiCountries</header>

        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {allCountries.map(oneCountry => {
                return (
                  <Link key={oneCountry.cca3} to={countryAddress(oneCountry)}>
                    {oneCountry.flag}
                    {oneCountry.name.common}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="col-7">
            <Switch>
              <Route path="/:countryId" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
