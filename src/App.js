// import countriesJson from './countries.json';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const fetchApi = async (countryCode = '') => {
  const ApiUrl =
    !countryCode || countryCode === ''
      ? 'https://ih-countries-api.herokuapp.com/countries'
      : `https://ih-countries-api.herokuapp.com/countries/${countryCode.toUpperCase()}`;

  try {
    const response = await fetch(ApiUrl);
    if (response.status !== 200) return false;
    let data = await response.json();
    if (data && (!countryCode || countryCode === ''))
      data = data.sort((a, b) =>
        a.name.official.localeCompare(b.name.official)
      );
    else if (!data) return false;

    return data;
  } catch (err) {
    console.log('ERROR FETCHING COUNTRIES FROM API', err);
    return '';
  }
};

const getCountryData = async (countryCode) => {
  let theCountry = await fetchApi(countryCode);
  if (!theCountry) return false;
  else return theCountry;
};

function App() {
  const [countries, setCountries] = useState([]);

  const getCountryName = (countryCode) => {
    if (countries.length) {
      const data = countries.find(
        (country) =>
          country.alpha3Code.toLowerCase() === countryCode.toLowerCase()
      );
      console.log({ data });
      return data.name.official;
    }
  };

  useEffect(() => {
    const getCountiesList = async () => {
      setCountries((await fetchApi()) || []);
    };

    getCountiesList();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {countries && countries.length ? (
                <CountriesList countries={countries} />
              ) : (
                <div>No Countries Found</div>
              )}
            </div>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-center">
            <Routes>
              <Route path="/" element={''} />
              <Route
                path="/country/:countryCode"
                element={
                  <CountryDetails
                    countryData={getCountryData}
                    countryName={getCountryName}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
