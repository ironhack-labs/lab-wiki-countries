
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setCountriesList(countries)
  })
  return (
    <div className="App">
     <Navbar/>

     <div className="mainPage">
       <div className="noScroll">
         <CountriesList className="overflow-auto" countries={countries}/>
       </div>
       <Routes>
          <Route
              path="/:countryId"
              element={<CountryDetails countriesList={countriesList}/>}
          />
       </Routes>
       
     </div>
  
     </div>
  );
}

export default App;
