// src/App.js
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
        response.data.sort((a, b) => a.alpha3Code.localeCompare(b.alpha3Code))

        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);





  return <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <CountriesList countries={countries} />
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  </div>;
}
export default App;