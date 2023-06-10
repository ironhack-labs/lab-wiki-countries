import countriesJSON from './countries.json';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  console.log('here are the countries', countries);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
