import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';

import './App.css';
import json from './countries.json'

function App() {
  const [countries, setCountries] = useState(json)

  useEffect(() => { // Recupère les informations des pays et ne repete pas
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(request => setCountries(request.data))
    .catch(err => console.log("Erreur axios app.js",err))
  }, [])
  
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              <CountriesList countries={countries} /> {/* Affiche la liste de tous les pays */}
            </div>
          </div>
          <Routes>
            <Route path="/:id" element={ <CountryDetails /> } /> {/* Affiche les details du pays cliqué */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
