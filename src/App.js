import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountryDetails from './components/CountryDetails/CountryDetails'
import CountriesList from './components/CountriesList/CountriesList'
//import countriesData from './countries.json'
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
const axios = require('axios').default

function App() {

  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesData(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (

    <div className="App">
      <Navbar />

      <div className="container">

        <div className="row">

          <div className='col-md-3'>
            <CountriesList countriesData={countriesData}></CountriesList>
          </div>

          <div>
            <Routes>
              <Route path="/:country_id" element={
                <CountryDetails countriesData={countriesData} />
              } />
            </Routes>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
