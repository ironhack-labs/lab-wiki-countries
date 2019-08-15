import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-5 list">
                <div className="list-group">
                  {
                    countries.map((country) => {
                      return <Link className="list-group-item list-group-item-action" to={country.cca3}>{country.flag}{country.name.official}</Link>
                    })
                  }
                </div>
              </div>
              <div className="col-7">
                <Switch>
                  <Route path='/:id' component={CountryDetail} />
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
