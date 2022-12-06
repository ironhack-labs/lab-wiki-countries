import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
// import countries from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((result) => {
        return result.json();
      })
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:id" element={<CountriesList countries={countries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
