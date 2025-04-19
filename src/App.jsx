import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {

  const [countries, setCountries] = useState([]);
  const API_URL = "https://ih-countries-api.herokuapp.com";

  const getCountries = () => {
    console.log("fetching country data...")
    axios.get(`${API_URL}/countries`)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCountries()

  }, [])

  console.log(countries)



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />}></Route>
        <Route path="/:countryId" element={<CountryDetails countries={countries} url={API_URL} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
