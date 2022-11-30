import { Outlet, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import CountriesDetails from './components/CountryDetails/CountriesDetails';

function App() {
  const api = 'https://ih-countries-api.herokuapp.com/countries';

  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  function Index() {
    return (
      <div className="container my-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route
            index
            element={
              <CountriesList
                countries={countries}
                setCountryCode={setCountryCode}
              />
            }
          />
          <Route
            path="/:countryId"
            element={[
              <CountriesList
                countries={countries}
                setCountryCode={setCountryCode}
              />,
              <CountriesDetails
                countries={countries}
                countryCode={countryCode}
              />,
            ]}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
