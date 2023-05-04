import "./App.css";
import { useState, useEffect } from "react";
import countriesJSON from "./countries.json"
import Navbar from "./components/Navbar.js"
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails";
import axios from "axios"

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  // This is how we can get the data from an API and not the JSON file directly
  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  //These set the routes to receive the component pages we have created
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;