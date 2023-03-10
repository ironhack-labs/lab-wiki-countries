import countriesJson from './countries.json';
import './App.css';

import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  const findCountry = (countryCode) => {
    console.log({ countryCode });
    return countryCode
      ? countries.find(
          (country) =>
            country.alpha3Code.toLowerCase() === countryCode.toLowerCase()
        )
      : false;
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-center">
            <Routes>
              <Route path="/" element={''} />
              <Route
                path="/country/:countryCode"
                element={<CountryDetails country={findCountry} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
