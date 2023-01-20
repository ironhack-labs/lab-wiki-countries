import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json"

import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">
         <Navbar />
         <Routes>
        <Route path="/list" element={<CountriesList countries={countries}/>} />
        <Route path="/alpha3Code" element={<CountryDetails />} />
      </Routes>

  </div>;
}
export default App;