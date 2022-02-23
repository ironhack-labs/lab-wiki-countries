
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails'
import theCountries from './countries.json'
import { useState, useEffect } from "react"
import axios from "axios"


function App() {

  // const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   setCountries(theCountries)

  // }, [])

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(` https://ih-countries-api.herokuapp.com/countries`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])



  return (
    <div className="App">
      <main className='row'>
        <Navbar />
        <div className='col-4'>

          <CountriesList countries={countries} />
        </div>
        <div className='col-4'>

          <Routes >
            <Route path='/details/:countryId' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
