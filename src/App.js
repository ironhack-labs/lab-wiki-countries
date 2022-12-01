import "./App.css";
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import countries from "./countries.json";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountryDetails";
import axios from 'axios';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [countriesD, setCountries] = useState([]);

  // useEffect(() => {
  //   setCountries(countries); //actual JSON DATA
  // }, []);

  useEffect(() => {
    const getData = async function () {
      const baseURL = "https://ih-countries-api.herokuapp.com/countries";
      const response = await axios.get(baseURL);
      const data = response.data;
      //console.log("data", data);
      setCountries(data);
    }
    getData();
  }, [])

  return <div className="App">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route
        path="/listCountries"
        element={<CountriesList countries={countriesD} />}
      />
      <Route
        path="/:id"
        element={<CountriesDetails countries={countriesD} />}
      />
    </Routes>
  </div>;
}

export default App;
