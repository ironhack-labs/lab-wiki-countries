import {useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import countriesFromJson from "./countries.json";
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';



function App() {

  const[countries, setCountries] = useState([]);
  const apiURL = "https://ih-countries-api.herokuapp.com"


  useEffect(() => {
    axios.get(`${apiURL}/countries`)
      .then(response => {
        console.log(response)
        setCountries(response.data);
      })
      .catch(e => {
        console.log("error getting characters from API...", e);
      })
  }, []);


  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}/>
      <Routes>
        <Route path={"/:countryId"} element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
