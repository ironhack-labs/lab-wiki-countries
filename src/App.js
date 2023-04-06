
import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Countries from "./countries.json";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";
import './App.css';
import axios from 'axios';


function App() {

  const [countriesArr, setCountriesArr] = useState([]);

  const baseURL = "https://ih-countries-api.herokuapp.com/countries"

  // axios
  //   .get('https://ih-countries-api.herokuapp.com/countries/')
  //   .then((response) => {
  //     console.log(response.data);
  //     setCountriesArr(response.data);
  //   })
  //   .catch((error) => console.error(error));

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/')
      .then((response) => {
        console.log(response.data);
        setCountriesArr(response.data);
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesArr} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countries={countriesArr} />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
