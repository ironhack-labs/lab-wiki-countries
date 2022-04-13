import './App.css';

import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [ countries, setCountries ] = useState([])

  useEffect( () => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then( resFromApi => {
        setCountries([...resFromApi.data])
      } )
      .catch( error => console.log( error ) )
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div>
        <div className="row">
          <CountriesList countries={[...countries]} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Route exact path='/countries/:alpha3Code' render={
            (props) => {
              const country = countries.find ( (country) => {
                return country.alpha3Code === props.match.params.alpha3Code
              })
              return <CountryDetails { ...props } country={ country } />
            }
          } />
        </div>
      </div>
    </div>
  );
}

export default App;
