import './App.css';
import countriesList from './countries.json'
import React,{ useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState(countriesList);


  return (
<div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <h1>-i am App.js-</h1>
      <CountryDetails countries={countries}/>
      <CountriesList  countries={countries}/>
      {/* React-Router Route rendering the CountryDetails should go here */}
    </div>
  </div>
</div>
  );
}

export default App;
