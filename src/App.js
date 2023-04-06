// src/App.js
import { useState, useEffect  } from "react";
import "./App.css";

import countries from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import axios from "axios";

import { Route, Routes } from 'react-router-dom';


function App() {

  const [countriesArr, setCountiesArr] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
            setCountiesArr(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
}, []);





  return <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <CountriesList  countriesArr={countriesArr}/>
        <Routes>
          <Route path='/:countryId' element={<CountryDetails detail={countriesArr} />} />
        </Routes>
      </div>
    </div>
    

  </div>;
}
export default App;