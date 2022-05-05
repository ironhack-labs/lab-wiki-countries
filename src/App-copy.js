import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/NavBar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import countriesData from "./countries.json";




function App() {
  const [countries, setyCountries] = useState([]);

  useEffect(() => {
    setyCountries(countriesData);
  }, []);



  return (<div className="App">


    <div className="nav">
      <Navbar />
    </div>

    <div className="cols">
      <CountriesList countriesData={countriesData} />

    </div>
    <div className="cols">
      <Routes>
        <Route path='/:countryID' element={<CountryDetails countriesData={countriesData} />} />
      </Routes>

    </div>

  </div>)
}
export default App;
