import './App.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import axios from 'axios';

function App() {
  const [countries, setcountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      setcountries(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        {loading ? (
          'Loading'
        ) : (
          <div className="row">
            <div className="col-sm-4">
              <CountriesList countries={countries} />
            </div>
            <div className="col-sm-8">
              <Route
                path="/:code"
                component={(props) => (
                  <CountryDetails {...props} countries={countries} />
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
