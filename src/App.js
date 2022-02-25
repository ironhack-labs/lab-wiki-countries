// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function App() {
  /* const [countries, setCountries] = useState(countriesJSON); */ //without API
  //with API
  const [countries, setCountries] = useState([]);
  const { countryId } = useParams();
  const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    //get countries from the api server
    axios.get(apiURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container ">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails  countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
