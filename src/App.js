import './App.css';
import countries from "./countries.json"
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from "axios";


import { Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react';

const apiUrl = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  const [fetching, setFetching] = useState(true)
  const [apiCountry, setApiCountry ] = useState([])
  const [countrie, setCountries] = useState(countries)

  
  useEffect(() => {
    console.log('UseEffect is effect')
    axios.get(apiUrl).then((response) => {
      console.log("the response is ",response)
      setApiCountry(response.data)
      setFetching(false)
    })
  }, [])

  return (
    <div className="App">
       <NavBar />
      {/*  <Routes>
          <Route path="/" element={<CountriesList country={countrie} />} />
          <Route path="/country/:countryId" element={<CountryDetails />} />
        </Routes> */}

        {fetching && <p>Loading...</p>}

        {apiCountry.map((country) => {
          return (
        <div key={country._id}> 
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
            <h2>{country.name.common}</h2>
            {console.log("the data is ", country)}
        </div>
    )
        })}
     
    </div>
  );
}

export default App;
