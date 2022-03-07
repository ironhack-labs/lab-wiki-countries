import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import CountriesList from './components/CountriesList';
import countriesData from "./countries.json"
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [countries,setCountries] = useState();
  const [isLoading,setIsLoading] = useState(false);

    useEffect(() =>{
      axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => {
          setCountries(response.data);
          setIsLoading(true)
        })
    },[]);

    // console.log('countries ' + countries);
  return (
    <div className="App">
      <Navbar />
      {!isLoading && <p>Loading...</p>}
      <Routes>
        {isLoading &&
        <Route 
          path="/"
          element={<CountriesList countries={countries}/>}
        />
        } 
         <Route 
          path="/:countryid"
          element={<CountriesList countries={countries}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
