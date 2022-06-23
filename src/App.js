import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from './pages/Layout';
import Home from './pages/Home';
import CountryDetailsPage from './pages/CountryDetailsPage';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response.data)
        const allCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common, 'en', { sensitivity: 'base' })
        );
        console.log('allCountries', allCountries);
        setCountries(allCountries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home countries={countries} />}>
            <Route
              path="/:alpha3Code"
              element={<CountryDetailsPage countries={countries} />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
