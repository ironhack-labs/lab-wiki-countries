import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
// import countriesData from './countries.json'
import { useState, useEffect } from 'react'
const axios = require('axios').default;



function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {

    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data)
      })
      .catch(err => console.log(err))
    
  }, [])

  
  
  return (
    
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <CountriesList countriesData={countries} />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/:id" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>


  )
}

export default App
