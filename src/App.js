import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import allCountries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(allCountries);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
