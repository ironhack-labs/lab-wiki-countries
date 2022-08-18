import Navbar from './Components/Navbar/Navbar';
import './App.css';
import CountriesList from './Components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';
import { useState } from 'react';

function App() {
  const [countries] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/countries" element={<CountriesList />} />
      <Route path="/countries/:countryCode" element={<CountryDetails countries={countries}/>} />
      </Routes>
    </div>
  );
}

export default App;
