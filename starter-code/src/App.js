import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import CountryList from './components/CountryList';
import countries from './countries.json';
import './App.css';

class App extends Component {

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
          <Route path="/" render={(routeProps) => <CountryList countries={countries} {...routeProps}/>}/>
          <Route path="/:id" render={(routeProps) => <CountryDetail countries={countries} {...routeProps}/>}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
