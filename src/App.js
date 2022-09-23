
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from "axios";
import { useState, useEffect } from 'react';


import './App.css';

const apiURL = " https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [featching, setFeatching] = useState(true)
  const [countries, setCountries] = useState([])

  useEffect(()=> {
    axios.get(apiURL).then(res => {
      setCountries(res.data)
      setFeatching(false)

    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
      {featching && <p>Loading..</p>}
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>        
            <Route path='/:countryCode' element={<CountryDetails  countries={countries}  />} />
          </Routes>
        </div>
      </div>      
    </div>
  );
}

export default App;
