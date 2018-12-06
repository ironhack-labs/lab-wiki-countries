import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";

import countriesJSON from './countries.json';

// import CountryDetail from "./components/CountryDetail/CountryDetail";


class App extends Component {


  constructor() {
    super()
    this.state={countriesJSON: countriesJSON };
  }

  render() {
    return (
      <div>
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
           <Link className="navbar-brand" to="/">WikiCountries</Link>
           
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              {this.state.countriesJSON.map((country, index) => (<div key={index}  className="list-group">
              <Link className="list-group-item list-group-item-action" to={country.cca3}>
                  {country.flag}
                  {country.name.common}
                </Link>
                  </div>
                  ))}
            </div>
           {/* creo que aquí va el switch */}
            
          </div>
        </div>
      
      </div>
            {/* <div class="list-group">
              <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a> */}
          
      </div>
      
    );
  }
}

export default App;


