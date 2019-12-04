import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Countries from "./countries.json";
import CountryDetail from "./CountryDetail/CountryDetail";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries : [...Countries],
    }
  }

  findBorder(chosenCountry){
    let countryBorder = [...this.state.countries]
    countryBorder = countryBorder.filter(country => country.cca3 === chosenCountry)[0];
    return countryBorder.name.common
  }

  render (){
    return(
    <div className="App">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-5" style = {{maxHeight: "90vh",overflow: "scroll"}}>
            <div class="list-group">
            {this.state.countries.map((country, i) =>{ return (<Link key={i} to={"/countryDetail/" + country.cca3} className="list-group-item list-group-item-action">{country.cca2} {country.name.common}</Link>)})}
            </div>
          </div>
          <Switch>
            <Route
              exact
              path="/countryDetail/:chosenCountry"
              render={(props) => {
                let chosenCountry = props.match.params.chosenCountry;
                let countryPayload = [...this.state.countries];
                //make console.log remember
                countryPayload = countryPayload.filter(country => country.cca3 === chosenCountry)[0];
                return (<CountryDetail country={countryPayload} borders={(b)=> this.findBorder(b)}></CountryDetail>); //ask tomorrow
              }}
            />
            </Switch>
        </div>
      </div>
    </div>
      );
  
  }
}

