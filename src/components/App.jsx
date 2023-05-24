import './App.css'

import { Route, Routes } from 'react-router-dom'

// import countries from '../countries.json'
import axios from 'axios'

import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'
import { useEffect, useState } from 'react'


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => setCountries(response.data))
      .catch(error => console.log(error));
  }, [])

  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">

          <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <CountriesList countries={countries} />
          </div>

          <div className="col-7">
            <Routes>
              <Route path="/:id" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>

        </div>
      </div >

    </div>
  )
}

export default App;
