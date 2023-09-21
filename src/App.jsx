import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>

      <Navbar />
      
      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/:countryId" element={ <CountryDetails /> } />

      </Routes>
    </div>
  );
}

export default App;
