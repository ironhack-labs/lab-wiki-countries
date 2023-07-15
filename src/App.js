
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import countriesData from './countries.json';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  // const [countries, setCountries] = useState(() => countriesData);
  
  // Iteration #4
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((res) => {
      setCountries(res.data);
    })
    .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
    <div className="row">
    <CountriesList countries={countries} />
      <Routes>
        <Route path='/details/:id' element={ <CountryDetails countries={countries} /> } />
      </Routes>
    </div>
  </div>

     
      
    </div>
  );
}

export default App;
