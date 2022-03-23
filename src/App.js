import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesJson from './countries.json';
import { Routes, Route, useParams } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  const url = `https://ih-countries-api.herokuapp.com/countries`;
  const request = () => {
    const data = axios.get(url);
    data.then((data) => setCountries(data.data));
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesJson={countries} />
          {/* <CountryDetails countriesJson={countries} /> */}
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countriesJson={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
