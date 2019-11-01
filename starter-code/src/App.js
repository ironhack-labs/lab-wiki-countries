import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/NavBar'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar headline="WikiCountries" />
        <div className="row">
          <CountryList countries={countries} />
          <Switch>
            <Route path='/:id' component={CountryDetail} />
          </Switch>
        </div>
      </div >
    )
  }
}

export default App;
