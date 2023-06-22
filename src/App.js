// src/App.js
import "./App.css";
import { Navbar } from "./components/Navbar";
import countries from './countries.json'
import { useState, useEffect } from "react";
import  CountriesList  from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";
import { Routes, Router, Link, NavLink, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [countriesToDisplay, setCountriesToDisplay] = useState(countries);

  const BaseURL = "https://ih-countries-api.herokuapp.com/countries"

  useEffect(() => {
    axios.get(BaseURL)
    .then((response) => {
      console.log(response.data)
    })
    .catch( e => console.log(e))
  }, [])



  return <div className="App">

          <Navbar/>

          <div className="container">
            <div className="row">
          <CountriesList countriesList={countriesToDisplay}/>
          
              <Routes>
                <Route path="/:alpha3Code" element={<CountryDetails countries={countriesToDisplay} setCountries={setCountriesToDisplay}/>} /> 

              </Routes>
                </div>
              </div>
          </div>;
}
export default App;