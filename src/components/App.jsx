import './App.css';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './CountriesList/CountriesList';
// import countriesArr from "../countries.json";
import CountriesDetails from './CountryDetails/CountryDetails';
import { useState, useEffect } from 'react';

function App() {

  const [countriesBackup, setCountriesBackup] = useState([])
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(countries => countries.json())
      .then(countries => parseCountries(countries))
      .then(countries => {
        setCountry(countries)
        setCountriesBackup(countries)
      })
      .catch(err => console.log(err))
  }, [])


  const parseCountries = (countries) => {
    return countries.map(({
      name,
      alpha2Code,
      alpha3Code,
      capital,
      region,
      languages,
      area,
      borders
    }) => {


      return {
        name,
        alpha2Code,
        alpha3Code,
        capital,
        region,
        languages,
        area,
        borders
      }
    })
  }


  const filterCountry = (alpha3Code) => {
    const countryFiltered = countriesBackup.filter(country => country.alpha3Code === alpha3Code)
    const [countrySelected] = countryFiltered
    setCountry(countrySelected)
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row">
        <CountriesList filterCountry={filterCountry} countries={countriesBackup}></CountriesList>
        <Routes>
          <Route path='/:country' element={<CountriesDetails filterCountry={filterCountry} country={country} />} />
        </Routes>
      </div >

    </div >
  );
}

export default App;
