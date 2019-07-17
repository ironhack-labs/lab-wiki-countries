import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Country';
import countries from './countries.json';

class App extends Component {
  constructor() {
    super()
    this.countriesCopy = [...countries];
  }
  render() {
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
          <div className="row">
          <div className="col-5" style={{height: "90vh", overflow: "scroll"}}>
          {this.countriesCopy.map((country)=>
         <Country flag={country.flag} name={country.name.common}></Country>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
