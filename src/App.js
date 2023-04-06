import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countriesArr, setCountriesArr] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesArr(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCountries = () => {
    return (
      <div className="container">
        <div className="row">
          <CountriesList countriesToRender={countriesArr} />

          <Routes>
            <Route
              path="/:countryCode"
              element={<CountryDetails countriesToSelectFrom={countriesArr} />}
            />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
    
      {countriesArr ? renderCountries() : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
