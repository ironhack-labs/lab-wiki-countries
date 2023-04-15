// src/App.js
import "./App.css";
import wikiCountries from "./countries.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";

function App() {

  const [countries, setCountries] = useState(wikiCountries);


  return <div className="App">

  <Navbar />

  <CountriesList countries={countries} />








  </div>;
}
export default App;