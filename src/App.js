import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(response => {
      setCountries(response.data);
    })
    .catch(error => {
      console.error('Error fetching counstries data:', error);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      
      <div className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route path="/:id" element={<CountryDetails countries={countries} />} />
        </Routes>
        </div>
        </div>
      
    </div>
  );
}

export default App;
