// src/App.js
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar"
import countries from "./countries.json"

function App() {
  const baseURL = "https://ih-countries-api.herokuapp.com/countries";
  const [countriesArr, setCountriesArr] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => {
        setCountriesArr(res.data)
      })
      .catch((err)=>console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countriesArr={countriesArr} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route path='/:countryCode' element={<CountryDetails countriesArr={countriesArr} />} />
            
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App;
