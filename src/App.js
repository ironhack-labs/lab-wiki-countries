import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import countriesJson from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState(countriesJson)

  useEffect(()=> {
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then(res => res.json())
    .then(json => {setCountries(json)})
  }, [])

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
