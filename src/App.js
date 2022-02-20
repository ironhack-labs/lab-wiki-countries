import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';

// import countries from './countries.json';
const axios = require('axios');

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((countriesFromApi) => {
        if (!countries) setCountries(countriesFromApi.data);
      });
  });

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="list">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
          <div style={{ width: 600, marginLeft: 60 }}>
            <Routes>
              <Route
                path="/details/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
