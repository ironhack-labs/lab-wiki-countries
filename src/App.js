import "./App.css";
// import countriesArr from './countries.json'
import { useState } from 'react'
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import axios from "axios"

function App() {
  const [countriesArr, setCountriesArr] = useState([])
  const [fetching, setFetching] = useState(true)
  const apiURL = 'https://ih-countries-api.herokuapp.com/countries'

  useState(() => {
    axios.get(apiURL).then(response => {
      setCountriesArr(response.data)
      setFetching(false)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      {fetching && <p>Loading ...</p>}
      <CountriesList countries={countriesArr} />
      
    </div>
  )
}
export default App;