import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/Countries-list/CountriesList';
import CountryDetails from './components/Country-details/CountryDetails';
import Navbar from './components/Navbar/NavBar';
import countriesData from './countries.json'
import axios from 'axios'




function App() {

  const CountriesAppList = () => {

    const [foundCountries, setFoundCountries] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
      fetchCountries()
    }, [])


    const fetchCountries = () => {
      axios
        .get('https://ih-countries-api.herokuapp.com/countries')
        .then(({ data }) => {
          setFoundCountries(data)
          setFetching(false)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className='row'>
          <CountriesList countriesData={countriesData} />
          <Routes>
            <Route path="/:country_id" element={<CountryDetails countriesData={countriesData} />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
