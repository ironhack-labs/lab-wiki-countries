import "./App.css";
import { Route, Routes } from 'react-router-dom';
//import countries from "./../countries.json"
import Navbar from "./Navbar/Navbar"
import CountriesList from "./CountriesList/CountriesList";
import CountryDetails from "./CountryDetails/CountryDetails"
import { React, useState, useEffect } from 'react';
import axios from "axios"




function App() {

  const [countriesData, setCountriesData] = useState([]); //si quiero utilizar el archivo json local, tendria que descomentar import countries y aqui para iniciar poner "countries"

  useEffect(() => {
    axios
      .get(" https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountriesData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })

  }, [setCountriesData])



  return (

    <div className="App">
      <Navbar />

      <div className="row">
        <CountriesList countries={countriesData} />
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countries={countriesData} />} />
        </Routes>

      </div>

    </div>
  );
}



export default App;