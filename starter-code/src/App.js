import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import countryDetail from './CountryDetail.js';
import { Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor (props){
    super (props);
  }

  render () {
    return (
      <div className='App'>

        <div>
        <nav className='navbar navbar-dark bg-primary mb-3'>
          <div className='container'>
            <a className='navbar-brand' href='/'>WikiCountries</a>
          </div>
        </nav>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-5">
              {countries.map (function (country,index) {
                return (
                  <div className="list-group" key={country.cca3}>
                    <NavLink to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag}{country.name.common}</NavLink>
                  </div>
                )
                })}
              
            </div>
            <div className="col-7">
              <Switch> 
                <Route exact path='/' render={() => {
                  return (
                    <p>Bonjour</p>
                  )
                }}/> 
                <Route path='/:id' component={countryDetail}/>  
                {/* id fait référence au param id dans country detail */}
              </Switch>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
}

export default App
