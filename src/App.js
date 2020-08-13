import React from 'react';
import countryData from './countries.json';
import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">



    <CountriesList countryData={countryData}/>

    </div>
  );
}

export default App;
