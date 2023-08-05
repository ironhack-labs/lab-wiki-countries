import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-4">
            <CountriesList countries={countries} />
          </div>
          <div className="col-8">
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
