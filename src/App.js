import { useState } from 'react';
import './App.css';
import countriesData from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesData)
  
  
  return (
    <div className="App">
        <Navbar />
      <div className="container">
        <div className="row">
    
            <CountriesList countries={countries} />
            
          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries}/>} />
          </Routes>

          </div>
        </div>
      </div>
  );
}

export default App;
