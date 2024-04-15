import { Route,Routes } from "react-router-dom";
import "./App.css";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";




function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelected = (country) => {
    //event.preventDefault()
    console.log(country.capital)
    setSelectedCountry(country);
  }

  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage handleCountrySelected={handleCountrySelected} />} />
       

        <Route path="/:countryId" element={<CountryDetails selectedCountry={selectedCountry} />} />
      </Routes>

    </div>
  );
}



export default App;
