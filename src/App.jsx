import "./App.css";
import react from 'react';
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">

      <Navbar />
      <h1>LAB | React WikiCountries</h1>

      
    </div>
  );
}

export default App;
