import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { useEffect, useState } from "react";

const countriesURL = 'https://ih-countries-api.herokuapp.com/countries'

function App() {

  const [countries, setCountries] = useState()
  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    axios
      .get(countriesURL)
      .then(response => setCountries(response.data))
      .catch(err => `Error (${err}) during countries' list load!`)
  }

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage countries={countries} />} />
        <Route path={'/:countryId'} element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
