import './App.css';
import countriesJSON from './countries.json';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

  /*   useEffect(() => {
    axios.get(apiURL).then((response) => {
      response.data.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });

      setCountries(response.data);
      setFetching(false);
    });
  }, []); */

  useEffect(() => {
    setCountries(countriesJSON);
  }, [countries]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            {/* <Route path="/CountriesList" element={<CountriesList countries={countries} />} /> */}
            <Route
              path="/countries/:alpha3code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
