import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import CountriesList from './CountriesList'

import CountryDetails from './CountryDetails'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className='d-flex'>
        <CountriesList />
        <Switch>
          <Route path="/:country" render={props => <CountryDetails {...props} />} />
        </Switch>
      </div >
    </>
  )
}

export default App;
