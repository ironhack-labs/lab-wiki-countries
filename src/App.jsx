import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryId" element={<CountryDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
