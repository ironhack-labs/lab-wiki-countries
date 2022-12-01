import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/WebNavBar/NavBar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import './App.css'
import { useEffect, useState } from 'react'


const App = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then(response => response.json())
      .then(countriesData => setCountries(countriesData))
  }, [])

  return (
    <div className="App">
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path='/:id' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  )

}


export default App;
