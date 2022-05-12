import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesArr from './countries.json'
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';


function App() {
  const [countries, setCountries] = useState(countriesArr);
  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(response => {
      setCountries(response.data)
      console.log("Countries from array: ", response.data);
    })
    .catch( (e) => console.log("error getting elements from API.", e))

  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path='/' element={ <CountriesList countries={countries} />} />
            <Route path='/country/:countryId' element={ <CountryDetails countries={countries}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;