import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import CountryDetails from './components/CountryDetail'
import Init from './components/Init'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'



class App extends Component {
  constructor() {
    super()
    this.state = {
      countries
    }
  }
  render() {
    return (
      <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountriy</a>
        </div>
      </nav>
      <div class="container">
            <div class="row">
              <div class="col-5 group">
                <div class="list-group"> 
                  {/* Map de los paises */} 
                  {/* <a class="list-group-item list-group-item-action" href="/ABW">{country.name.common}</a> */}
                  {this.state.countries.map((country, i) => <Link key={country.cca3} className="list-group-item list-group-item-action" to={`/country/${country.cca3}`}>{country.flag} {country.name.common}</Link>)}                
                </div>
              </div>
              {/* Detail */}
              <Switch>
                <Route path='/' exact component={Init} />
                <Route path="/country/:id" exact component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
