import { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

function App() {

  const [countries, setCountries] = useState([]);
  // console.log("countries", countries);
  const baseURL = "https://ih-countries-api.herokuapp.com";
  
  useEffect(() => {
    axios.get(`${baseURL}/countries`)
    .then((response) =>{
      setCountries(response.data);
    })
    .catch((e) => console.log(e));
  },[]);

  
  return (
    <div className="App">
      <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList countries={countries} />
              <Routes>
                <Route path="/:countryCode" element={ <CountriesDetails countries={countries} /> } />
              </Routes>
            </div>
          </div>

          </div>
    </div>
  );
}

export default App;
