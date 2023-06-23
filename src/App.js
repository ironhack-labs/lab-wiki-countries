// src/App.js
import { useState } from 'react';
import './App.css';
import countriesFromJson from './countries.json';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesFromJson);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row ">
          <CountriesList className="border rounded" countriesArr={countries} />
          <Routes>
            <Route
              path="/:countryAlpha3Code"
              element={<CountryDetails countriesArr={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
