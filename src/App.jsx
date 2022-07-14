import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './Components/CountriesList/CountriesList';
import Navbar from './Components/Navbar/Navbar';
import countries from './countries.json'
import CountryDetails from './Components/CountryDetails/CountryDetails';
import axios from 'axios';
import {useState, useEffect} from 'react'


function App() {

  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {

    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((res) => {
        setAllCountries(res.data)
      })
      .catch(er => console.error(er))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <CountriesList allCountries={allCountries} />
          </div>
          <div className='col'>
            <Routes>
              <Route path='/country-details/:alpha3Code' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
