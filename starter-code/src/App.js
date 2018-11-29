import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>WikiCountries</h1>
        </header>
        <div className="main">
        <CountryList />
        <Switch>
          <Route path="/:countryCode" component={CountryDetails} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;