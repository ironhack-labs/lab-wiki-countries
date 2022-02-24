import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";
import jsonCountries from "./countries.json";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [ countries, setCountries ] = useState([]);
  
  useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(response => {
          setCountries(response.data);
          setLoading(false);
        }).catch(err => console.log(err))
  }, []);

  return (
      <div className="App">
        <Navbar />
        {loading && <h1>Loading ...</h1>}
        <div className="container">
          <div className='row'>
            <CountriesList countries={countries} />
            <Routes>
              {countries.map(country => {
                return <Route key={`/${country.alpha3Code}`} path="/:countryCode" element={<CountryDetails countries={countries} />} /> 
              })}
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
