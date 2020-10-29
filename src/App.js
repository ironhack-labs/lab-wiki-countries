import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div >
    <Navbar />

    <div className='container'>
      <div className='row'>
        <CountriesList countries={ countriesJson }/>
        <Route path='/:id' component={ CountryDetails } countries={ countriesJson }/>

      </div>



    </div>

    </div>
  );
}

export default App;
