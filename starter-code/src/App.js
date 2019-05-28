import React, { Component } from 'react';
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import { Router, Route, Switch } from "react-router";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight:'90vh', overflow:'scroll'}}>
              <CountryList />
            </div>
            <div className="col-7">
              <CountryDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
