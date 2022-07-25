// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
{/* 
      <CountriesList countries={countriesData} /> */}

      <Routes>
      <Route path="/" element ={<CountriesList countries ={countriesData} />} />
        <Route
          path="/:countryId"
          element={<CountryDetails countries ={countriesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
