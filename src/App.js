import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import countries from "./countries.json";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import axios from 'axios';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [fetching, setFetching] = useState(true);
  const [countriesList, setCountriesList] = useState([]);
  // console.log("countries",countriesList)
  
  
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setCountriesList(response.data);
      setFetching(false);
    });
    // setCountriesList(countries);
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      {fetching && <p>Loading ...</p>}
      <Routes>
        <Route 
          path="/"
          element={<CountriesList countriesList={countriesList}/>}
        />
        <Route
            path="/country/:countryId"
            element={<CountryDetails countriesList={countriesList} />}
          />
      </Routes>
    </div>

  );
}

export default App;
