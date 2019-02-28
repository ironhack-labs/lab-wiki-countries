import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryView from './components/CountryView'
import countries from './countries'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-dark bg-primary mb-3">
          <span className="navbar-brand mb-0 h1" >WikiCountries</span>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountryList countries={countries} />
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path='/:cca3' render={props => <CountryView countries={countries} {...props} />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
