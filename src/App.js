import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route exact path="/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
