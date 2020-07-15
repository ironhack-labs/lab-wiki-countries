import React, {Component} from 'react';
import './App.css';
import countriesJson from '../countries.json'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { CountryDetail } from './CountryDetail'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {countries: countriesJson}
  }
}

render() {
  return (
   
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div class="list-group">
              {this.state.countries.map((country, idx) => <a href={country.cca3} key={idx} > {country.flag}
                {country.name.official}</a>)}
            </div>
          </div>
          <div class="col-7">
            <Switch>
              <Route exact path='/:id' render={(props) =>
                <CountryDetail {...props} countries={this.state.countries} />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
