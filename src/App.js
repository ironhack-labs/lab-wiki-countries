import React, { Component } from 'react';
import './App.css';

import CountryDetail from './components/CountryDetail'
import CountryList from './components/CountryList'

import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <main className="columns">
        <CountryList />
        <Route path="/:cca3" component={CountryDetail} />
      </main>
    );
  }
}

export default App;
