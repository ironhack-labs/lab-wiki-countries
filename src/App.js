import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import { Routes, Route } from 'react-router-dom';
import countriesService from './services/countries.service';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    countriesService.list()
      .then((countries) => {
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(countries)})
      .catch(console.error)
  }, [])


  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountriesDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
