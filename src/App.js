import './App.css';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countriesAll, setCountriesAll] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const { data } = await axios(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setCountriesAll(data);
    console.log('DATA AXIOS', data);
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={countriesAll.map((country) => {
            return (
              <CountriesList key={country.alpha3Code} oneCountry={country} />
            );
          })}
        ></Route>
        <Route
          path="/details/:countryCode"
          element={<CountryDetails countries={countriesAll} />}
        />
      </Routes>
    </div>
  );
}

export default App;
