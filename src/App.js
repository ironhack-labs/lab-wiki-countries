import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import data from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countries, setCountries] = useState(data)

  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={ <CountryDetails  countries={countries}  /> } />
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
