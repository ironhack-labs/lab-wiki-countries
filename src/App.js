// src/App.js
import "./App.css";
import { Navbar } from "./components/Navbar";
import countries from './countries.json'
import { useState } from "react";
import  CountriesList  from "./components/CountriesList";
import { CountryDetails } from "./components/CountryDetails";
import { Routes, Router, Link, NavLink, Route } from "react-router-dom";

function App() {
  const [countriesToDisplay, setCountriesToDisplay] = useState(countries);


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