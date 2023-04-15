import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import countriesJson from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState(countriesJson)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:id" element={<CountriesDetails countries={countries} />} />
      </Routes>
      
    </div>
  );
}

export default App;
