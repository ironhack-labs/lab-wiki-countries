import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './components/countrydetail/CountryDetail';

import { Switch, Route, Link } from 'react-router-dom';
import allCountriesJSON from './countries.json';
import ReactCountryFlag from "react-country-flag";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        countries: [...allCountriesJSON]
    }
  }

  showListOfCountries = () => {
    let allCountries = [...this.state.countries];
    return allCountries.map(eachCountry => {
      return(
        <div>
            <Link exact
            to={`${eachCountry.cca3}`}
            className="list-group-item list-group-item-action"
            > <ReactCountryFlag 
            styleProps={{
              width: '20px',
              height: '20px'
            }}
            code={`${eachCountry.cca2}`}
            svg
          /> {eachCountry.name.common}
            </Link>
        </div>
    );
    });
  };

  render() {
    
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>

        <div className="row">
          <div className="col-5">
            <div className="list-group">{this.showListOfCountries()}</div>
          </div>  
          <div className="col-7">
            <Switch>
              <Route exact path="/:countryCode" component={CountryDetail} />
            </Switch>
          </div>

        </div>
      </div>      
    );
  }
}

export default App;
