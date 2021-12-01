import './App.css';
import React, { Component } from 'react'
import countries from './countries.json'
import  CountriesList  from './components/CountriesList';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

 


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar" />
        <div className= "container-flex">
          <div className="list">
            <CountriesList countries={countries} />
          </div>
          <div>
            <Switch>
              <Route
                path="/country/:id"
                render={(props) => <CountryDetails {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


