import { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import axios from "axios"
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";


import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";


function App() {

  const [countryList, setCountries] = useState(null);

  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
          .then((response)=>{
            setCountries(response.data);
          })
          .catch((e)=>{
            console.log("error getting countries from the API...",e);
          });
  },[])

  return (
    <>
      <div>
        <h1>LAB| React WikiCountries</h1>
      </div>
      <div className="App">
        <Navbar />

        <Routes>
          <Router path="/" element={<HomePage />} />
          <Router path="/:countryId" element={<CountryDetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
