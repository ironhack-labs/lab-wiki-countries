import React from 'react';

import { Switch, Route } from 'react-router-dom'

import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'


import './App.css'

function App() {
  return (
    <div id="root">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
      <CountriesList />

      <Switch>
        <Route path="/details/:id" render={props => <CountryDetails {...props} />} />
      </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
