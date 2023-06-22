// src/App.js
import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);
  return (
    <div className="App">
      <NavBar />

      <CountriesList countriesArr={countriesArr} />

      <Routes>
        <Route
          path="/:id"
          element={<CountryDetails CountryDetails={countriesArr} />}
        />
      </Routes>
    </div>
  );
}

export default App;
