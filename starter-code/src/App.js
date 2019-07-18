import React, { Component } from 'react';

import './App.css';
import Country from './Country';
import countries from './countries.json';

import CountryDetail from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";


class App extends Component {
  constructor() {
    super()
    this.countriesCopy = [...countries];
  }
  
  render() {
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                <Link>
                WikiCountries</Link>
                
              </a>
            </div>
          </nav>
          <div className="container">
          <div className="row">
          <div className="col-5 scrollable">
             <div className="list-group">
               {countries.map((country, idx) => {
                 return (
                   <Link
                     key={idx}
                     className="list-group-item list-group-item-action"
                     to={`/countries/${country.cca3}`}
                   >
                     {country.flag} {country.name.common}
                   </Link>
                 );
               })}
             </div>
           </div>
          {/* <div className="col-5" style={{height: "90vh", overflow: "scroll"}}>
          {this.countriesCopy.map((country)=>
         <Country flag={country.flag} name={country.name.common}></Country>
              )}
              </div> */}
              
             <Route path="/countries/:cca3" component={CountryDetail} />
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
