// src/App.js
// import { Routes } from "react-router-dom";
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
