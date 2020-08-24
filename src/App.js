import React, { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios'

import { Switch, Route, Link } from 'react-router-dom'

function App() {
  const [countries, setCountries] = useState({
    countries: [],
    chosenCountry: ''
  })
  console.log('countrues initial state: ', countries)
  function componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2')
      .then(response => {
        setCountries({ countries: response.data })
      })
  }


  function showCountry(country) {
    console.log('country', country)
    setCountries({ ...countries, chosenCountry: country })
    console.log('chosen country: ', countries.chosenCountry)
  }

  return (
    <div className="App">
      <CountriesList
        countries={countries.countries}
        showCountry={showCountry}
      />
      <Switch>
        <Route >
          <CountryDetails />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
