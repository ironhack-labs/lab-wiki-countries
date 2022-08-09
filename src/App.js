import React, { Component } from 'react';
import {BrowserRouter, Routes, Router } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import './App.css';

function App(){
const [countries, setCountries] = useState([]);
const [fetching, setFetching]= useState(true);

useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com').then((response) => {
      setCountries(response.data);
      setFetching(false);
    });
  }, []);
  

  return (
    <div className='App'>
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-5' style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div className='list-group'>
                <CountriesList countries={countries} />
              </div>
            </div>
            <Routes>
            <Route path="/countries/:id" element={<CountryDetails />} />
           
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
  