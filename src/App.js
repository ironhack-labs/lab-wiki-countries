import countriesJSON from './countries.json';
import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  console.log('here are the countries', countries);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setCountries(response.data);
      } catch (error) {
        console.log('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route
              path=":id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
