// src/App.js
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import axios from "axios"
import { useEffect, useState } from "react";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Grid  } from "@mui/material";

function App() {

  const URL_API = "https://ih-countries-api.herokuapp.com/countries"
  const [countries, setCountries] = useState([])
  

  useEffect (() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API)
        setCountries(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])


  return (
    <div className="App">
      <Navbar />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <CountriesList countries={countries} />
      </Grid>

      <Grid item xs={6}>
       <Routes>
        <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } />
        </Routes>
      </Grid>

      </Grid>
     
    </div>
  );
}
export default App;
