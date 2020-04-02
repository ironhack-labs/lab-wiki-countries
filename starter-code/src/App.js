import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import countries from "./countries.json";
import CountryList from "./Components/CountryList";
import { Switch, Route } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";

export default class App extends Component {

  activeCountryHandler=(props)=>{
    let allLinks= [...document.getElementsByClassName("country-menu")]
    let clickedLink = document.getElementById(props)
    allLinks.map(link => link.classList.remove("active", "text-white"))
    clickedLink.classList.add("active", "text-white")
  }

  render() {
    return (
      <div className="App">
        <div className="w-100 py-3 font-weight-bold fixed-top mb-2 bg-primary text-left">
          <h2 className="text-white ml-5 d-inline justift">Wikicountries</h2>
        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-sm-4 list-group">
            {countries.map(country => (
              <CountryList country={country} key={country.cca3} activeLink={this.activeCountryHandler}/>
            ))}
          </div>

          <div className="col-xl-8 col-lg-7 col-sm-6 country-details">
            <Switch>
              <Route exact path="/:country" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
