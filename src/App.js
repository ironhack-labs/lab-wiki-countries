import countriesJSON from './countries.json';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  console.log('here are the countries', countries);

  return (
    <div className="App">
      <NavBar />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
