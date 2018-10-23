import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDet from './components/CountryDetail.js';
import {countryList} from './components/CountriesDet';

import countries from './countries.json';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { lisCountries: countries }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={countryList} />
          <Route exact path="/countrydetail/:id" component={CountryDet} />
        </Switch>
      </div>
    );
  }
}

export default App;
