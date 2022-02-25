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

      <div className="d-flex justify-content-center m-5">
        <CountriesList countries={ countries }/>
        <Routes>
          <Route path="/" element={ <div className="w-50 mx-5"></div> }></Route>
          <Route path="/:countryCode" element={ <CountryDetails countries={ countries }/> }></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
