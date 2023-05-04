import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import { useState, useEffect  } from 'react'
import { Routes, Route } from "react-router-dom"
import axios from "axios"

const apiURL = "https://ih-countries-api.herokuapp.com/countries"


function App() {
  const [fetching, setFetching] = useState(true)
  const [countries, setCountries] = useState([])

  useEffect(() => {

    axios.get(apiURL)
          .then((response) => {
            setCountries(response.data)
            setFetching(false)
          })
  }, [])


  return (
    <div className="App">
        <Navbar />
        {fetching && <p>Loading ...</p>}
      <div className="body">

        <CountriesList countries={countries}/>

        <Routes>
        <Route path="/:countryCode" element={ <CountryDetails countries={countries} /> } /> 
        </Routes>

      </div>
    </div>

  )
}

export default App
