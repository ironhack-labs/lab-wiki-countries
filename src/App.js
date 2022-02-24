import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
//import countries from './countries.json';
const axios = require('axios');

function App() {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountryList(response.data);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countryList} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countryList} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
