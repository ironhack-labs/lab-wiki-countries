import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import data from './countries.json';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    setCountries(data);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />

        </div>
      </div>
    </div>
  );
}
export default App;
