import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import NavBar from './navBar/NavBar.js'
import CountryList from './countriesList/CountriesList.js'
import CountryDetails from './countryDetails/CountryDetails.js'
import countries from '../countries.json'

import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }
  render() {
    return (
      <>
      <div className='App'>
        <NavBar />
        <div className="container">
            <div className="row">
              <CountryList countries={countries}/ >
            <Switch>              
              <Route path="/:id" exact render={props => <CountryDetails {...props}/>} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
  }
  
}

export default App;
