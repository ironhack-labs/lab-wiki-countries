// src/App.js
import { useState } from "react";
import "./App.css";

import countries from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

const [countriesArr, setCountiesArr] = useState(countries)



  return <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <CountriesList  countriesArr={countriesArr}/>
        <CountryDetails />
      </div>
    </div>
    

  </div>;
}
export default App;