import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import countries from './countries.json'
import CountryDetail from './CountryDetail'
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
      
    }
  }

  render() {
    return (
      
      <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="App">
    <div id="root" >
    <div>
      
      <div className="container">
        <div className="row">
          <div className="col-5" 
          // {{"style=max-height: 90vh" "overflow: scroll"}}
          >
            <div className="list-group">
            {this.state.countries.map((country) => {
          return (
           
          <Link className="list-group-item list-group-item-action" to={country.cca3}>{country.flag}{country.name.official}</Link>
          
          )
          })}

              
            </div>
          </div>
      </div>
      </div>
      </div>
      </div>
        <Switch>
          <Route exact path='/:cca3' component={CountryDetail}/>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
