import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Countries from './countries.json'
import CountryDetail from './components/CountryDetail.js'

class App extends Component {

  render(){
    return (
      <div className="App">
  
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>      
  
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                {Countries.map((country) =>{
                  return <Link to={country.cca3} key={country.cca3} className="list-group-item list-group-item-action">{country.name.common} {country.flag}</Link>
                })
                }
              </div>
            </div>

            <Route path="/:id" component={CountryDetail} />

          </div>
        </div>
      </div>
    );

  }
}

export default App;
