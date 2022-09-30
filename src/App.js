import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';

import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import localCountries from './countries.json';

function App() {
  const [countries, setCountries] = useState(localCountries);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(
          response.data.sort((a, b) => a.alpha3Code.localeCompare(b.alpha3Code))
        );
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
