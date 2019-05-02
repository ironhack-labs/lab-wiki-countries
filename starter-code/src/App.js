import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    countries: countries
  };

  filterCountry(searchCountry) {
    let filteredCountry = [...countries];
    this.setState({
      ...this.state,
      countries: filteredCountry.filter(country =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <div className="searchbar">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
              <SearchBar
                placeholder="Search for a country"
                className="search"
                search={searchCountry => this.filterCountry(searchCountry)}
              />
            </div>
          </div>
        </nav>
        <div className="all">
          <div className="container">
            <div className="row">
              <div
                className="col-7"
                style={{ height: "90vh", overflow: "scroll", minWidth: "25%" }}
              >
                <div className="list-group">
                  {this.state.countries.map((country, idx) => {
                    return (
                      <Link
                        key={idx}
                        className="list-group-item list-group-item-action"
                        to={`/${country.cca3}`}
                      >
                        {country.flag} {country.name.common}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/:tag" component={CountryDetail} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
