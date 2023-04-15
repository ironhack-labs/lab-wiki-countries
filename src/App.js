import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import countriesJson from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState(countriesJson)
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
