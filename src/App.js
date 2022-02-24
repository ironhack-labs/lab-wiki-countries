// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  const { countryId } = useParams();

  useEffect(() => {
    //get countries from the api server
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      });
  }, [countryId]);

  return (
    <div className="App">
      <Navbar />

      <div className="container ">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/countries/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
