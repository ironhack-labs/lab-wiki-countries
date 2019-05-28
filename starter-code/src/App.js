import React, { Component } from 'react';
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import { Router, Route, Switch } from "react-router";
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-5">
          <CountryList />
        </div>
        <div class="col-7">
          <CountryDetail />
        </div>
      </div>
    );
  }
}

export default App;
