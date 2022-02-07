import './App.css';
import { Navbar, CountriesList, CountryDetails } from './components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-start">
          <div className="col-4">
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
          <Routes>
          <Route path="/" element={<CountryDetails countries={countries} />} />
          <Route path="/countries/:id" element={ <CountryDetails countries={countries} /> } />
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
