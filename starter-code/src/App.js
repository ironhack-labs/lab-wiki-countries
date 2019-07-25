import React, { Component } from 'react';
import './App.css';
import allTheCountries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './countryDetail/CountryDetail';
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
 
  
  
  showListOfCounties () {
    return allTheCountries.map((eachCountry, i) => {
      return (
        <div key={i} className="list-group">
        <NavLink   activeClassName="active" exact to={`/${eachCountry.cca3}`} className="list-group-item list-group-item-action my-1">
        {eachCountry.flag} {eachCountry.name.common} 
        </NavLink>
      
      </div>
      )
    })

  }


  render() {
    return (
      <div className="container-fluid">
      <div className="row nav-row">Wiki Countries</div>
      
      <div className="row">
        <div className="col-5 overflow-auto max-height-80">
          {this.showListOfCounties()}
        </div>
        <div className="col-7">
          <Route exact path='/:country' component={CountryDetail}   />
        </div>
      </div>
     
      </div>
    );
  }
}

export default App;
