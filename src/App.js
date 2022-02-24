// src/App.js
import './App.css';
import { Routes, Route } from 'react-router';
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
