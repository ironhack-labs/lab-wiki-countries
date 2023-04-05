import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getCountriesByAPI } from './services/countries';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [alphas, setAlphas] = useState([]);

  useEffect(() => {
    getCountriesByAPI()
      .then((res) => {
        setCountries(res);

        const alphas = res.reduce((countries, country) => {
          countries.push({
            alpha3Code: country.alpha3Code,
            alpha2Code: country.alpha2Code,
            name: country.name.common,
          });

          return countries;
        }, []);

        setAlphas(alphas);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} alphas={alphas} />

          <Routes>
            <Route
              path="/"
              element={
                <div className="col-7 d-flex align-items-center justify-content-center">
                  <h1>Click on some country</h1>
                </div>
              }
            />
            <Route path="/:code" element={<CountryDetails alphas={alphas} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
