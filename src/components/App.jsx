import './App.css'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Navbar/Navbar.jsx'
import CountriesList from './CountriesList/CountriesList.jsx'
import CountryDetails from './CountryDetails/CountryDetails.jsx'

import countries from '../countries.json'
// import axios from 'axios'


const App = () => {

  // const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('https://ih-countries-api.herokuapp.com/countries')
  //     setCountries(result.data)
  //   }

  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <div className="row">
          <CountriesList countries={countries} />
          <div className="col-7">
            <Routes>
              <Route path='/:id' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>




    </div>
  )
}

export default App
