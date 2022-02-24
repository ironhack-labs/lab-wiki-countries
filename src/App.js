import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import countriesArr from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesArr);

  return (
    <div className="App">

      <Navbar />
      <CountriesList countries={countries} />

      <Routes>
        <Route path="/countries/:countryId" element={<CountryDetails />} />
      </Routes>

    </div>
  );
}

export default App;
