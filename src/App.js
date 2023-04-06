import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import countriesData from "./countries.json";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountryList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
