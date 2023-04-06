import './App.css';
import { useState, useEffect } from 'react';
import countries from './countries.json'; // Renamed CountrieDetails to countries
import Navbar from './components/Navbar';
import { NavLink, Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countries);
  }, []);

  return (
    <div className="App">
    
           
    <Navbar />
    

    <Routes>
    <Route path="/countrieslist" element={<CountriesList />} />
      <Route path="/:alpha3Code" element={<CountryDetails />} />
    </Routes>


    </div>
  );
}

export default App;
