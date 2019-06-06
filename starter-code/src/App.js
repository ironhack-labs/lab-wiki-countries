import React, { Component } from 'react';
import NavBar from './components/stateful/NavBar'
import countriesJson from './countries.json'
import CountryDetail from './components/stateful/CountrieDetails'
import { Switch, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullCountriesList: countriesJson,
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <NavBar  countries={this.state.fullCountriesList}/>
        <Switch>
          <Route path='/' exact component=""></Route>
          <Route path='/:id' exact render={CountryDetail}></Route>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
