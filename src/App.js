import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

 




function App() {
 const [countryList, setCountryList] = useState(countries);

  return (
    <div className="App">
         <Navbar />  
    <div className="container">
        <div className="row noScroll">
         <CountriesList />
     </div>
     <Routes>
      <Route  path="/:countryId" element={<CountryDetails countries={countries} />} />
     </Routes>
     </div>
    </div>
  );
}

export default App;
