// src/App.js
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      {loading && <h2>loading</h2>}
      <div>
        <Header />
        <CountriesList countries={countries} />
      </div>
      <div>
        <Routes>
          <Route path="/country/:id" element={<CountryDetails countries={countries}/>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
