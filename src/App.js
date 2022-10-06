import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import CountryArray from './countries.json';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(CountryArray);
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountryList countries={countries} />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
export default App;
