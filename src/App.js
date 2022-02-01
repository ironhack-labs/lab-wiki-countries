import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {Routes, Route} from 'react-router-dom';
import countriesData from './countries.json'
import CountryDetails from './components/CountryDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container' style={{height: '400px'}}>
        <div className='row'>
          <div className='col-5'  style={{maxHeight: '90vh', overflow:'scroll', float:'left'}}>
            <div className='list-group'>
            <CountriesList countries={countriesData}/>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path = '/:countryCode' element = {<CountryDetails countries={countriesData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
