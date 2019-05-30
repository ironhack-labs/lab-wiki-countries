import React, { Component } from "react";
// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import countries from "./data/countries.json";
import Menu from "./Menu";
import CountryDetail from "./CountryDetail";

class App extends Component {
  constructor() {
    super();
    this.state = { countries: countries };
  }

  render() {


    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="container">
  <div className="row">
  <div
            className="col"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <Menu
              className="list-group-item list-group-item-action"
              countries={this.state.countries}
            />
          </div>
          <div className="col">
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
          </div>   
          </div>
          </div>
</div>





        
          
       
    );
  }
}

export default App;