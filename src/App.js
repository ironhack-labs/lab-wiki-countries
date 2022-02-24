import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesArray from "./countries.json";

function App() {

  const [countries, setCountries] = useState(countriesArray);

  return (
    <div className="App">
      <Navbar />

      <div className="d-flex align-items-center m-5">
        <Routes>
          <Route path="/" element={ <CountriesList countries={ countries }/> } ></Route>
          <Route path="/:countryCode" element={ <CountryDetails countries={ countries }/> }></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
