import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
    .then((response) => {
      const data = response.data;
      setCountriesData(data)
    })


  },[]);

  return (
    <div className="App">
       <Navbar />
      <div className="container">
      <div className="row">
      <CountriesList countries={countriesData} />
      <Routes>
       <Route path="/:id" element={<CountryDetails countries={countriesData} />}></Route>
       </Routes>
  </div>
</div>
    </div>
  );
}

export default App;
