import React, { Component } from 'react';
import './App.css';
import ElementCountry from './components/ElementCountry';
import DetailsCountry from './components/DetailsCountry';
import countriesList from './countries.json';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = { countries: countriesList }
  }
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
            <div className="col-5" style={{ 'maxHeight': '90vh', 'overflow': 'scroll' }}>
              <div className="list-group">
                {this.state.countries.map(country => {
                  return (
                    <ElementCountry key={country.cca3} {...country} />
                  )
                })}
              </div>
            </div>
            <Route exact path='/:id' component={DetailsCountry}></Route>
          </div>
        </div>
      </div>
    )
  }
}