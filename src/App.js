// src/App.js
import { Route, Routes } from "react-router-dom";
import './App.css';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } />
      </Routes>
      <CountriesList countries={countries} />
    </div>
  );
}
export default App;
