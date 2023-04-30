import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  console.log(countries);

  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col-6">
            {!countries ? (
              <>Loading countries...</>
            ) : (
              <CountriesList countries={countries} />
            )}
          </div>

          <div className="col-6">
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
