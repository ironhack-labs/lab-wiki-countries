// src/App.js
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Grid  } from "@mui/material";

function App() {
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
