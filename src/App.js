import countriesData from './countries.json';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import './App.css';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(countriesData);

  // useEffect(() => {
  //   axios
  //     .get('https://ih-countries-api.herokuapp.com/countries')
  //     .then((country) => {
  //       setCountries(country);
  //     });
  // }, [country]);

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
              width: '30%',
              marginTop: '40px',
            }}
          >
            <CountriesList props={countries} />
          </div>
          <div className="col-7">
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
