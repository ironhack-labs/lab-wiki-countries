import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
