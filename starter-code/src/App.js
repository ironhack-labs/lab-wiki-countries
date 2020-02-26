import React, { Component } from 'react';
import countries from './countries.json';
import './App.css';
import { Link } from 'react-router-dom';
import Country from './Country/Country.js';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail/CountryDetail.js';
import Borders from './Borders/Borders.js';


class App extends Component {

  state = {
    countries: countries
  }

  render() {



    return (


      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" >
                <div className="list-group">
                  {this.state.countries.map(country =>
                    <Country cca3={country.cca3} flag={country.flag} name={country.name.common}></Country>
                  )}
                </div>
              </div>
              <Switch>
                <Route
                  exact
                  path="/:id"
                  render={props => {
                    let filteredCountries = this.state.countries.filter(country => country.cca3 === props.match.params.id)
                    console.log(filteredCountries)
                    return (
                      <CountryDetail name={filteredCountries[0].name.common} capital={filteredCountries[0].capital[0]} area={filteredCountries[0].area} borders={filteredCountries[0].borders}></CountryDetail>
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </div>


      </div>


    );
  }
}

export default App;
