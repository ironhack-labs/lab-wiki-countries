import './App.css';
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";


const countriesAPIURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get(countriesAPIURL)
    .then(res=> setCountries(res.data))
    .catch(err=>console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="d-flex flex-row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
