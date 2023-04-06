import './App.css';
import countriesFromJSON from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesFromJSON);

  console.log(countries);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
