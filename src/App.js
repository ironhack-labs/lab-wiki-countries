import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response.data[0])
        response.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(response.data);
      })
  },
    [])

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
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
