import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Countries from "./Countries";
import Details from './Details';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <div class="row">
          <Countries />

          <Switch>
            {countries.map(country => {
              return (
                <Route path={`/${country.cca3}`}
                  render={(props) => <Details name={country.name.common} capital={country.capital} area={country.area} borders={country.borders}/>}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
