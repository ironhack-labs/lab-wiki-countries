import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
// import countriesData from "./countries.json";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    fecthCountries()
  }, [])                                                              // array vacío -> efecto de montaje

  const fecthCountries = () => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
        setFetching(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <Routes>
            <Route path='/' element={<CountriesList countries={countries} fetching={fetching} />} />
            <Route path='/:country_code' element={<CountryDetails countries={countries} fetchingCList={fetching} />} />
          </Routes>
        </div>
      </div>
      
    </div>
  )
}

export default App;
