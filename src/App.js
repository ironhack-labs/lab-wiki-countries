import countriesData from './countries.json';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes, NavLink, Link } from 'react-router-dom';

import './App.css';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} />

      <Routes>
        <Route
          path="/:countryAlpha3Code"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
