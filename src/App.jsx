import "./App.css"
import { Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar"
import CountriesList from "./Components/CountriesList/CountriesList"
import CountryDetails from "./Components/CountryDetails/CountryDetails"
import { useState, useEffect } from "react"

import axios from "axios"

function App() {

  const [allCountries, setCountries] = useState([])

  useEffect(() => {

    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data)
      })
      .catch(error => console.error(error))
  }, [])
  console.log(allCountries)

  return (
    <>
      <div className="App">

        <NavBar />

        <div className="container">
          <div className="row">
            <CountriesList countriesList={allCountries} />

          </div>
        </div>
      </div>
      <Routes>
        <Route path="/:countries_id" element={<CountryDetails countries={allCountries} />} />
      </Routes>

    </>
  )
}

export default App
