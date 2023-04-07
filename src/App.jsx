import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getCountriesByAPI } from './services/countries';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import './App.css';

const initialStates = {
  countries: [],
  alphas: [],
  loaded: false,
};

const App = () => {
  const [countries, setCountries] = useState(initialStates);

  useEffect(() => {
    getCountriesByAPI()
      .then((res) => {
        const alphas = res.reduce((countries, country) => {
          countries.push({
            alpha3Code: country.alpha3Code,
            alpha2Code: country.alpha2Code,
            name: country.name.common,
          });

          return countries;
        }, []);

        setCountries((prev) => ({
          ...prev,
          countries: res,
          alphas: alphas,
          loaded: true,
        }));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CountriesList {...countries} />

          <Routes>
            <Route
              path="/"
              element={
                <div className="col-7 d-flex align-items-center justify-content-center">
                  <h1>Click on some country</h1>
                </div>
              }
            />
            <Route
              path="/:code"
              element={<CountryDetails alphas={countries.alphas} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
