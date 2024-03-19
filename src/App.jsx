import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const countriesAPI = "https://ih-countries-api.herokuapp.com/countries";

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(countriesAPI).then((response) => {
      const countries = response.data;
      setCountries(countries);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage country={countries}/>} />
        <Route path="/:countryId" element={<CountryDetails country={countries}/>} />
      </Routes>
    </div>
  );
}

export default App;
