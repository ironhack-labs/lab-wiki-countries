// src/App.js
import "./App.css";
import NavBar from "./components/NavBar";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList/CountriesList";
import countriesJSON from "./countries.json"
import { Routes, Route } from 'react-router-dom';


function App() {
  return <div>
    <NavBar />
    <Routes>
      <Route path="/:id" element={<CountryDetails countries={countriesJSON} />} />
    </Routes>
    <CountriesList />

  </div>;
}
export default App;