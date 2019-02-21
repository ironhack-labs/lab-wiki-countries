import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Countries from "./countries.json";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import CountrytDetails from './CountryDetails'

class App extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-5">
          <h2>Countries</h2>
          <div class="list-group">
            {Countries.map((eachCountry, index) => {
              return (
                <div key={eachCountry.id}>
                 <Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link> 
                  {eachCountry.flag}
            
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <Switch>
                  <Route exact path="/:id" component={CountrytDetails} />
                  </Switch>
        </div>

        
      
    );
  }
}

export default App;
