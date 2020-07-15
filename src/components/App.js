import React, { Component } from 'react';
import './App.css';
import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';
import { CountryDetail } from '../components/CountryDetail'
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: countriesJson
    }
  }

  render() {
    return (
      <div id="root">
        <div>
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <Link to="/" class="navbar-brand">WikiCountries</Link>
            </div>
          </nav>
          <div class="container">
            <div class="row">
              <div class="col-5" >
                <div class="list-group">
                  {this.state.countries.map((country, idx) => {`Link to = ${country.acc3}`} key={idx}>{country.flag} {country.name.offical})}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
