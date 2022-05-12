import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import {Routes, Route} from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
            setCountries(response.data)
            
        }) 
        .catch((err) => {console.log("Error getting data from api", err)})
    },[])


  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <CountriesList countries={countries}/>

      <Routes>
        <Route  path="/api/countries/:countryCode" element={<CountryDetails/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
