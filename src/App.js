import './App.css';
import React from 'react';

import countriesData from './countries.json';
import { useState } from 'react';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4 text-start" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <CountryList countries={countries}/>
          </div>
          <div className="col">
            <Routes>
              <Route path="/country/:countryCode" element={<CountryDetails countries={countries}/>} />
            </Routes>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
