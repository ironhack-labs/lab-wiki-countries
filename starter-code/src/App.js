import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import countries from './countries.json';

class App extends Component {
  state = {
    country: countries
  }

  list = this.state.country.map(country => (
    <div className="list-group">
      <Link className="list-group-item list-group-item-action" to={`/country/${country.cca3}`}>{country.flag}{country.name.common}</Link>
    </div>
  ))

  render() {
    return (
      <div className="container">
          <NavLink className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </NavLink>
          <div className="row">
            <div className="col-5">
                  <div className="list-group">
                  {this.list}
                  </div>
            </div>
            <CountryDetail />
            <Switch>
              <Route exact path="/country/:id" component={CountryDetail} />
            </Switch>
          </div>
    </div>
    );
  }
}

export default App;
