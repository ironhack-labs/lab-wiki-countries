// src/App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route
          path="/countriesList"
          element={<CountriesList countries={countries} />}
        />
        <Route
          path="/countries/:countryId"
          element={<CountryDetails />}
        />
      </Routes>
    </div>
  );
}
export default App;
