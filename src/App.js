import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchCountries() {
      try {
        const countriesFromDb = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountries(countriesFromDb.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchCountries();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/"></Route>
            <Route
              path="/countries/:countryId"
              element={<CountryDetails countries={countries} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
