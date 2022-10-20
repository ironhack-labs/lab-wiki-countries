import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import allcountries from "./countries.json"
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';


function App() {

  const [countries, setCountries] = useState(allcountries);



  return <div className="App">

    <div className="container">
      <div className="row">
        <Navbar >Wiki Countries</Navbar>
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />$
          <Route path="/:id/alpha3Code" element={countries.alpha3Code} />

          <Route path="/:id" element={<CountryDetails />} />



        </Routes>

      </div>
    </div>
  </div>



}

export default App;
