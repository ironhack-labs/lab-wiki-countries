import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route path="/countries/:id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
