import './App.css';
import countries from './../countries.json'
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './CountriesPage/CountriesList/CountriesList';
import CountryDetails from './CountriesDetailsPage/CountryDetails/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [newCountries, setCountries] = useState(null)

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries').then(({ data }) => setCountries(data))

  }, [])




  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<h1>ARRIBA ESPAÑA 💃</h1>} />
        <Route path='/countriesList' element={<CountriesList countries={newCountries} />} />
        <Route path='/countriesList/:alpha3Code' element={<CountryDetails countries={newCountries} />} />
      </Routes>
    </div>
  );
}

export default App;
