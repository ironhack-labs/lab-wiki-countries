import React, { Component } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

export const Countries = countries;

class App extends Component {
  state = {
    countries: countries,
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            {/* <CountryDetails /> */}
            <Switch>
              <Route exact path="/:cca3" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
