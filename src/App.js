import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';
import countries from "./countries.json";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            {countries.map(country => 
              <Route path={`/${country.alpha3Code}`} element={ <CountryDetails country={country} /> } />
            )}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;