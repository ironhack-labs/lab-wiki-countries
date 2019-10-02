import React, { Component } from "react";
import countriesList from "./utils/countries.json";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import CountryDetail from "./components/CountryDetail/CountryDetail.js";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      countries: countriesList,
      currentCountry: countriesList[20]
    };
  }

  getCountryByCode(code) {
    let country = this.state.countries.filter(country => country.cca3 === code);
    return country[0].name.common;
  }

  setCountry(id) {
    let newCurrentCountry = this.state.countries.filter(country => country.cca3 === id)[0];
    this.setState({
      ...this.state,
      currentCountry: newCurrentCountry
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {this.state.countries.map((country, idx) => {
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/${country.cca3}`}
                      key={idx}
                      onClick={() => this.setCountry(country.cca3)}
                      >
                      <span>{country.flag}</span> {country.name.official}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route
                  exact
                  path="/:countryID"
                  component={() =>
                    <CountryDetail
                      name={this.state.currentCountry.name.common}
                      capital={this.state.currentCountry.capital}
                      area={this.state.currentCountry.area}
                    >
                      {this.state.currentCountry.borders.map((border, idx) => {
                        return <li key={idx}><Link to={`/${border}`} onClick={() => this.setCountry(border)}>{this.getCountryByCode(border)}</Link></li>
                      })}
                    </CountryDetail>
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
