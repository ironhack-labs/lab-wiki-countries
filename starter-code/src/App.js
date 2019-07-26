import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import data from './countries.json'
import './App.css';

import CountryDetail from './components/CountryDetail';

class App extends Component {
  state = {
    countries: [...data]
  }

  renderCountries = () => {
    return this.state.countries.map( (country, index) => {
      return(
        <div key={index} className="row">
          <div className="col-12">
            <Link exact to={`/country/${country.cca3}`} className="row links">{country.flag} {country.name.common}</Link>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
              <h1>WikiCountries</h1>
          </div>
        </nav>

        <div className="container section">
          <div className="row">
            <div className="col-4 countries-container">{this.renderCountries()}</div>

            <div className="col-6 offset-1">
                <Route exact path="/country/:code" component={CountryDetail} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
