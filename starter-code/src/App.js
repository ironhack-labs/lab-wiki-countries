import React, { Component } from "react";
import './App.css';
import CountryDetail from './CountryDetail/CountryDetail';
import countries from './countries.json'
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      countries: [...countries]
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
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {this.state.countries.map((country,idx) => (
                  <Link className=" list-group-item list-group-item-action" key={idx} to={country.cca3}>{country.name.common}</Link>
                ))}
              </div>
            </div>
            <Route
              exact
              path="/:countryCode"
              render={props => {
                debugger;
                var countryCode = props.match.params.countryCode;
                let countryIndex = this.state.countries.findIndex(country => country.cca3 === countryCode)
                let borders = this.state.countries[countryIndex].borders.map(border => this.state.countries.find(country=> country.cca3 === border))
                return (
                  <CountryDetail
                  country={this.state.countries[countryIndex]} borders={borders}
                  ></CountryDetail>
                );
              }}
            />

          </div>
        </div>
      </div>
    )
  }

}
export default App;
