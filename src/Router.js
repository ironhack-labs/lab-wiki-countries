import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'
import countries from './countries.json'

import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Home from './components/Home'

export default function RouterApp() {
  return (
    <Router> 
      <div className='App'>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <CountriesList countries={countries}/>
            </div>
            <div className='col-7'>
              <Switch>
                <Route component={Home} exact path='/' />
                <Route component={CountryDetails} path='/:cca3' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}