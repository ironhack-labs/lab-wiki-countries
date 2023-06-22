// src/App.js
import "./App.css";
import country from './countries.json'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";


function App() {

  const [countryArr, setCountryArr] = useState(country)



  
  return (
  <div className="App">
    <NavBar />

    <CountriesList countryArr={countryArr}/>
  </div>
  )
}
export default App;