import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesPage from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
// import countriesData from "./countries.json"
import { useState, useEffect } from 'react';
import axios from "axios"

const countriesApi = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(countriesApi).then((response) => {
      setCountries(response.data)
    })
  }, [])


  return (

    <main className="App">


      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <CountriesPage countries={countries} />
          </div>
          <div className="col-6">
            <Routes>
              <Route path='/countries-details/:countryalpha3Code' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>

      </div>
    </main>

  );
}

export default App;

