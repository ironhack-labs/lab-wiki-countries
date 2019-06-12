import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CountryDetail from '../src/CountryDetail'
import CountryList from '../src/CountryList'


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <CountryList />
        <Switch>
          <Route exact path='/:countryId' component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
