// import countriesData from './countries.json'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CountriesPage from './components/CountriesList/CountriesPage'
import Navbar from './components/NavBar/Navbar'
import CountryDetails from './components/CountriesDetails/CountryDetails'
import { useState, useEffect } from 'react'
import axios from 'axios'

const countriesApi = "https://ih-countries-api.herokuapp.com/countries"


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(countriesApi)
      .then((response) => {
        setCountries(response.data)
      })
  }, [])


  return (
    <main>
      <Navbar />
      <div className='row'>
        <div className='col-4'>
          <CountriesPage countries={countries} />
        </div>
        <div className='col-8'>
          <Routes>
            <Route path='/:country_id' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </main>

  )
}

export default App
