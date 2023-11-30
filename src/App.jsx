//App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CountryDetails from "./pages/CountryDetailsPage.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";

function App() {
  return (
    <div className="App">
      <h1>WikiCountries</h1>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
