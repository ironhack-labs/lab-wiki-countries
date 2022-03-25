import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import './App.css';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const countriesFromApi = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setCountries(countriesFromApi.data);
  };

  useEffect(() => {
    getCountries();
  }, [countries]);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row text-start">
          <div
            classeName="col-5"
            style={{
              maxHeight: '90vh',
              overflow: 'scroll',
              width: '35%',
              marginTop: '40px',
            }}
          >
            <CountriesList props={countries} />
          </div>
          <div
            className="col-7"
            style={{
              marginTop: '60px',
            }}
          >
            <Routes>
              <Route
                path="/:countryId"
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
