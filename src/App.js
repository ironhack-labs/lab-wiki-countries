import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from  'react-router-dom'
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import axios from 'axios'

function App() {
  const apiURL = ' https://ih-countries-api.herokuapp.com/countries'
  const [countries, setCountries] = useState([])


  useEffect( () => {
  
    axios.get(apiURL)
    .then(rawData => {
        setCountries(rawData.data)
    }).catch(err => {
      console.log(err);
    })
  },[])
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<CountriesList countries={countries} />} />
      <Route path="/countries/:countryID" element={<CountryDetails  countries={countries}/>}/>
    </Routes>
  
  </div>;
}
export default App;