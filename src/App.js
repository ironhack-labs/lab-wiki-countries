import React from 'react';

import Navbar from './components/Navbar'
import './App.css'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1>First col</h1>
            <CountriesList />  {/*countries={countries}*/}
          </div>
          <div className="col-sm-8">
            <h1>Second col</h1>
            <Route path="/country/:countryId" component={CountryDetails} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;