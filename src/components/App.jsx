import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import countries from "../countries.json"
import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6 list">
            <CountriesList countries={countries} />
          </div>
          <div className="col-6 sticky">
            <Routes>
              <Route path='/:id' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App