import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import CountryDetail from './Components/CountryDetail/CountryDetail'
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.state.countries.map((country, index) => <a className="list-group-item list-group-item-action" key={index} ><Link to={`/${country.cca3}`}>{country.flag} {country.name.official}</Link></a>)}
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path='/:code' component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
