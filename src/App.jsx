import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

import { Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:countryAlpha3Code" element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
