import './App.css'
// import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        const {data: countriesData} = response
        setCountries(countriesData)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countriesData={countries} />
        </div>
      </div>
    </div>
  );
}

export default App