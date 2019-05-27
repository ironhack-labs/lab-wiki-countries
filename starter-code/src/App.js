import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="container">
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
        <CountryDetail />
      </div>
    );
  }
}

export default App;
