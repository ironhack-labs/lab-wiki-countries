import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from '../src/components/NavBar';
import CountriesList from '../src/components/CountriesList';
import CountryDetails from '../src/components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';



function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get ('https://ih-countries-api.herokuapp.com/countries')
      .then (response => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch (error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App" >

      <div className="navbar">
        <Navbar />
      </div>

      <div className="countriesList">
        <CountriesList countries={countries}/>
      </div>

      <div className="countriesDetails">
      <Routes>
          <Route
            path="/countries/:alpha3Code"
            element={ <CountryDetails/>} 
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;