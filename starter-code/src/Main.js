import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar.js"
import Countries from "./Countries.js"
import CountryDetails from "./CountryDetails"
import { Switch, Route } from "react-router-dom"

import countries from "./countries.json"

class Main extends Component {
  state = {
    countries: countries
  }

  render() {
    const listOfCountries = this.state.countries.map((country)=>{
      return (
        <Countries href={country.cca3} flag={country.flag} name={country.name.common}/>
      )
    })
    return (
      <div className="App">
        <NavBar />
        <div className="container"></div>
        <div className="row">
          <div className="col-5 sideCol">
            <div className="list-group">
              {listOfCountries}
            </div>
          </div>
          <Switch>
            <Route exact path="/:countryCode" component = {CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;