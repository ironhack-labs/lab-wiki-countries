import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList />

            <Switch>
              <Route exact path="/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
