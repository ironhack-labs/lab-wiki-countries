import React, { Component } from 'react';
import './App.css';
import data from './countries.json'
import CountryList from './components/CountryList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5 custom">
              <CountryList data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
