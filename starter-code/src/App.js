import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Countries from './Components/Countries';
import CountryDetail from './Components/CountryDetail';
import countries from './countries.json';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="main" />
        <div className="container">
          <div className="row">
            <Countries countries={countries} />
            <Switch>
              <Route path="/country/:countryCode" render={_ => <CountryDetail countries={countries} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
