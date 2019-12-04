import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail/CountryDetail";
import Countries from "./countries.json";

export default class App extends Component {
  constructor() {
    super();
    this.countries = [...Countries];
  }
  searchName(chosenCountry){
    let countryPayload = [...this.countries];
    countryPayload = countryPayload.filter(country => country.cca3 === chosenCountry)[0]

    return countryPayload.name.common

  }
  render() {
    return (
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
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              <div className="list-group">
                {this.countries.map((country, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={"/countryDetail/" + country.cca3}
                      className="list-group-item list-group-item-action"
                    >
                      {country.flag}
                      {country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Switch>
              <Route exact path="/countryDetail/:chosenCountry" render={(props)=>{
                let chosenCountry = props.match.params.chosenCountry;
                let countryPayload = [...this.countries];
                countryPayload = countryPayload.filter(country => country.cca3 === chosenCountry)[0]
                return(
                  <CountryDetail country={countryPayload} searchName={(cn) => this.searchName(cn)}></CountryDetail>
                )
              }} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
