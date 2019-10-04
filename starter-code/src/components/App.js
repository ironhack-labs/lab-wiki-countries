import React, { Component } from "react";
import logo from "../logo.svg";
// import "./App.css";
import countries from "../countries";
import Details from "./Details.js"
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    Countries: countries
  };

  showAllCountries = () => {
    let allCountries = this.state.Countries.map((eachCountry, i) => {
      return (
        <li key={i} className="list-group-item list-group-item-action">
          <Link to= {`/country-details/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
        </li>
      );
    });
    return allCountries;
  };

  render() {
    console.log("Hello World")
    return (
      <div>
        <div className="row">
          <div className="col-5">
          Countries
          <div class="list-group">
  {this.showAllCountries()}
          </div>
          </div>
        <Switch>
          <Route exact path='/country-details/:id' component={Details}/>
      </Switch>
        </div>
      </div>
      
    );
  }
}

export default App;
