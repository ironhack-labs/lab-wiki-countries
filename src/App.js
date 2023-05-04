import "./App.css";
import countriesArr from './countries.json'
import { useState } from 'react'
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countriesArr} />
      
    </div>
  )
}
export default App;