import "./App.css";
import React from 'react';
import countriesFromFile from './countries.json';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from 'axios';

function App() {

  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        console.log(result.data);
        setSelectedCountry(result.data);
      })
      .catch();
  }, []);

  return (
    <>
    <Navbar countries={countriesFromFile}></Navbar>
    <div className="container">

      <div className="row">
        {/* <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}> */}
          {/* <div className="list-group"> */}
            <CountriesList countries={countriesFromFile}></CountriesList>
          {/* </div>
        </div> */}

        <CountryDetails country={selectedCountry}></CountryDetails>
      </div>
    </div>
    </>
  );
}

export default App;