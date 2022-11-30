import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'

function App() {

  return (
    <div className="App">

      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <CountriesList />
          </div>
          <div className='col-6'>
            <Routes>
              <Route path='/countries/:country_alpha3Code' element={<CountryDetails />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
