import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log("Error: can not get countries from API", e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route
          path="/countries/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </>
  );
}

export default App;
