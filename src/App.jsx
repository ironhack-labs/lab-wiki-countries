import './App.css';

import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import { useEffect, useState } from 'react'

// import countries from './countries.json';
import AxiosCountriesAPI from './services/countriesAPI.service'

import { Routes, Route } from "react-router-dom";

function App() {

  const [countries, setCountries] = useState([])
  // const [error, setError] = useState(null)

  useEffect(() => {
    AxiosCountriesAPI
      .getCountries()
      .then((countries) => {
        console.log('llamar a pokemon');
        setCountries(countries)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        // setError('Error')
      })
  }, [])

  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? <p>Loading...</p> :
        <>
          <Navbar></Navbar>
          <div className="container">
            <div className="row">
              <Routes>
                <Route path='/' element={<CountriesList countries={countries}></CountriesList>}></Route>
                <Route path='/:idCountry' element={<CountryDetails countries={countries}></CountryDetails>}></Route>
              </Routes>
            </div>
          </div >
        </>
      }
    </div>
  )
}

export default App;
