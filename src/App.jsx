import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom"
import { useState } from "react";

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:countryId" element={<CountryDetails/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
