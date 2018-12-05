import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail/CountryDetail';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={{ "maxHeight": "90vh", "overflow": "scroll" }}>
                <div className="list-group">
                  {countries.map((country, index) => {
                    return (<Link className="list-group-item list-group-item-action" key={index} to={"/" + country.cca3}> {country.name.common}</Link>)
                  })}
                </div>
              </div>
              <div className="col-7">
                <Switch>
                  <Route exact path='/:id' component={CountryDetail} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
