import { useState, useEffect } from 'react';
import './App.css';
import Countries from './countries.json';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries').then(res => {
      console.log({resp: res.data})
      setCountries(res.data);
  }).catch(err => console.log({err}))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<CountriesList countries={ countries} />} />
        <Route 
          path="/:countryCode" 
          element={ <CountryDetails /> } 
        />
      </Routes>

    </div>
  );
}

export default App;
