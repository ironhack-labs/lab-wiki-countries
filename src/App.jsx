import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvYmluIiwiaWF0IjoxNjU1OTc2NzMxLCJleHAiOjE2NTU5NzczMzF9.kvGZc-cU78XiViIEQT71pgvW2-1A7SbJk_riLmuw7s0';
  const [countriesData, setCountriesData] = useState(null);
  useEffect(() => {
    let config = {
      method: 'get',
      url: 'https://ih-countries-api.herokuapp.com/countries',
    };

    axios(config)
      .then((response) => {
        setCountriesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!countriesData) {
    return <p>Loading</p>;
  }
  return (
    <div className="App">
      <Navbar />
      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container">
        {/* <!-- Bootstrap row wrapper div --> */}
        <div className="row">
          {/* <!-- Countries List (Bootstrap column) --> */}
          <CountriesList countriesData={countriesData} />
        </div>
        {/* <!-- Country Details (Bootstrap column) --> */}
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countriesData={countriesData} />}
          />
        </Routes>
      </div>
      ;
    </div>
  );
}

export default App;
