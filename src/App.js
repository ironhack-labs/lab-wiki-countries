import "./App.css"
// import countriesData from './countries.json'
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import CountriesList from "./components/CountriesList/CountriesList"
import CountryDetails from "./components/CountryDetails/CountryDetails"
import { Routes, Route } from "react-router-dom"
import axios from "axios"

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => console.error('---> error:', err)
      )
  }, [])

  return <div className="App">

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
}
export default App
