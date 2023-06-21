import React from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/:countryId" element={<CountryDetailsPage />} />

        </Routes>
    </div>
  );
}

export default App;
