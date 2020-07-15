import React from 'react'

import { Switch, Route } from 'react-router-dom'
import CountriesList from './CountriesMain/CountriesMain'
import CountryDetail from './CountryDetail/CountryDetail'

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path="/country/:id" render={props => <CountryDetail {...props}/>} />
          </Switch>
        </div>
      </div>
    </>
  )
}

export default App