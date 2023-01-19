// src/App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      
      <Routes>
        <Route path='/:alpha3Code' element={<CountryDetails />} />
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </div>
  )
}
export default App;
