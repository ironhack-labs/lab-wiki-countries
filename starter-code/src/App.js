import React, { Component } from 'react';
import CountryDetail from './components/CountryDetail'
import { Switch, Route, Link } from 'react-router-dom';
import countries from './countries.json'
//import logo from './logo.svg';
import './App.css';

class App extends Component {


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
            <div className="col-5">
              <div className="list-group">
                {countries.map(country => {
                  return (
                    <Link className="list-group-item list-group-item-action" to={`/countries/${country.cca3}`} key={country.cca3}>
                      {country.flag} {country.name.official}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path='/countries/:cca3' component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
