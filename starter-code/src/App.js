import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import CountryDetail from './components/CountryDetail'

class App extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="row">
          <div className="col-5">
            <Home />
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path="/" />
              <Route path="/:countryCode" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
