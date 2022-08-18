import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesSearch from './components/CountriesSearch/CountriesSearch';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(null);

  const countriesApi = `https://restcountries.com/v3.1/all`;

  const getCountries = async () => {
    try {
      let response = await axios.get(countriesApi);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
{/*       <CountriesList countries={countries} /> */}
{/*       <CountriesSearch countries={countries}/> */}
<Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/search-a-country" element={<CountriesSearch countries={countries} />} />
        <Route path="/CountryDetails/:countryCca" element={<CountryDetails countries={countries}/>} />

      </Routes>
    </div>
  );
}

export default App;
