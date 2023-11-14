import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import countriesJson from "./countries.json"
import CountriesList from './components/CountriesList';
import { Routes, Route, useParams } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([])
  
  let {alpha3Code} = useParams()
  
  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
      setCountries(response.data)
    })
    .catch(error => error)
  }, []);

  return (
    <>
    <div className="App">
    </div>
    <CountriesList countriesArray={countries}/>
    <Routes>
    <Route path="/:alpha3Code" element={<CountryDetails countriesArray={countries}/>}/>
    </Routes>
    </>
  );
}

export default App;
