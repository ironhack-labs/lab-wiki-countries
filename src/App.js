// src/App.js
import './App.css';
import country from './countries.json';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  const [countryArr, setCountryArr] = useState(country);

  return (
    <div className="App">
      <NavBar />

      <CountriesList countryArr={countryArr} />

      <Routes>
        <Route
          path="/:id"
          element={<CountryDetails countryDetails={countryArr} />}
        />
      </Routes>
    </div>
  );
}
export default App;
