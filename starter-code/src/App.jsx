import React from 'react';
import { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5 country-box">
              <div className="list-group">
                {countries.map(country => {
                  return (
                    <CountryDetail
                      country={country}
                      key={country.name.official}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
