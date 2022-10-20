import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from "./countries.json";
import CountriesDetails from './components/CountryDetails';
import {Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';




function App() {
  const [countriesArr, setCountriesArr] = useState();


  useEffect(() => {
    axios.get(" https://ih-countries-api.herokuapp.com/countries")
      .then( response => {
        setCountriesArr(response.data);
      })
      .catch(e => console.log("error getting data from API", e));
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div className="">
          

      <CountriesList propCountries={countriesArr}/>

      <Routes>
            <Route path="/:alpha3Code" element={ <CountriesDetails propCountries={countriesArr} /> } />
          </Routes> 

       
      </div>
  </div>

    </div>
  );
}

export default App;
