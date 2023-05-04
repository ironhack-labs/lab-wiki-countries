// src/App.js
import "./App.css";
import countriesJSON from "./countries.json"
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import { Routes, Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails"

function App() {
const [countries, setCountries] = useState(countriesJSON);
  return (
    <div className="App">
    <Navbar/>
      <div class="container">
        <div class="row">
         <CountriesList countries ={countries}/>
         <Routes>
          <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } />
         </Routes>
          
       </div>
      </div>
    </div>
  )
}
export default App;
