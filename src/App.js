import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import countries from './countries.json';

import React, { Component } from 'react';

class App extends Component {
  state = {
    countries: [...countries],
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route
                exact path="/:countryCode"
                render={(historyProps) => (
                  <CountryDetails {...historyProps} countries={this.state.countries} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
