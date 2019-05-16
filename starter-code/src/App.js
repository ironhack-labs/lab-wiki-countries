import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import CountryDetail from "./component/CountryDetail";
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    console.log('component did mount')}
  
    state = {
    countries: countries
  };

  

  render() {
    const countries = this.state.countries;
    return (
      <div className="App">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-5" >
                {countries.map(country => {
                  return (
                    <li key={country.cca3} className="list-group-item list-group-item-action">
                      <Link to={`/${country.cca3}`}>
                        {country.flag} {country.name.common}
                      </Link>
                    </li>
                  );
                })}
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/:id" component={CountryDetail}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
