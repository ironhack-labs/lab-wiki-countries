import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import CountryDetail from './components/CountryDetail'
import countries from './countries.json'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      countries
    }
  }

  printCountryDetail = (renderProps) => {
    const { countryCode } = renderProps.match.params
    return <CountryDetail countryCode={countryCode} countries={this.state.countries} />
  } 

  render() {
    return (
      <div className="App">
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <Link className="navbar-brand" to="/">WikiCountries</Link>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                  <div className="list-group">
                    { this.state.countries.map((c, i) => <Link to={c.cca3} key={i} className="list-group-item list-group-item-action">{c.flag} {c.name.common}</Link>)}
                  </div>
                </div>
                <Route exact path='/:countryCode' render={ this.printCountryDetail }/>
              </div>
            </div>
      </div>
    );
  }
}
