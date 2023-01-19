import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import axios from 'axios'
import { useState, useEffect } from "react";
  

function App() {
  const [countriesData, setCountries] = useState([])

  useEffect( () => {
   axios.get('https://ih-countries-api.herokuapp.com/countries')
   .then(results => {

    setCountries(results.data)
   })
  }, [])


  return( 
  
  <div className="App">

<Navbar/>
<Routes>
<Route
          path="/"
          element={<CountriesList  countries={countriesData}/>}
        />
        <Route path="/:countryId" element={ <CountryDetails countries={countriesData} /> } />
</Routes>
  </div>
  )
}
export default App;