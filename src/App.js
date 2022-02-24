import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import CountriesList from './components/CountriesList';
//import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        const data = response.data;
        setCountries(data);
      })
    },[]
  );

  console.log(countries);
  
  return (
    <div className="App">
      <Navbar />
      <h1>Countries</h1>
      <div className="countries">
      <CountriesList countries={countries}/> 
      <Routes>
  
        <Route
          path='/:id' 
          element={ <CountryDetails countries={countries}/>}
        />

      </Routes>
      </div>
    </div>
  );
}

export default App;
