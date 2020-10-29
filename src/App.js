import React, {useState, useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/navbar/NavBar'
import CountryDetails from './components/countrydetails/CountryDetails'
import CountriesList from './components/countrieslist/CountriesList'

//import countriesFile from './countries.json'

const App = () => {

  const [countriesInfo, setCountriesInfo] = useState([])

  useEffect(() => {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
          setCountriesInfo(response.data)
      })
  }, [])

  return (
    <div className="App">

      <NavBar />

      <div style={{display: 'flex'}}>

        <div style={{maxHeight: '400px', overflow: 'auto'}}>
          <CountriesList countries={countriesInfo}/>
        </div>

        <div>
          <Route path="/:countryCCA3" component={CountryDetails}/>
        </div>

      </div>

    </div>
  );
}

export default App;
