import { Route, Routes } from 'react-router-dom';
import countriesDB from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react';
import CountryDetail from './components/CountryDetail';
import countriesService from './services/countries'

function App() {
  const [countries, setCountries] = useState()

  useEffect(() => {
    countriesService.list()
    .then((countries) => {
      setCountries((prevCountries) => {
        return countries
      })
    })
    .catch(console.error)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetail countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
