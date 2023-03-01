import './App.css'
// import countriesList from './../countries.json'
import Navbar from './Navbar/Navbar'
import Countries from './CountriesList/CountriesList'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './CountryDetails/CountryDetails'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [countriesList, setCountriesList] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => setCountriesList(data))
  }, [])

  return (
    <div className="App">

      <Navbar />

      <div className='body' >
        <Countries {...{ countriesList }} />

        <Routes>
          <Route path='/:countrycode' element={<CountryDetails />} />
        </Routes>
      </div>

    </div>
  )
}

export default App