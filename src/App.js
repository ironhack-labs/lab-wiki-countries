import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { useEffect, useState } from "react";
import { Route, Routes, NavLink, Link } from 'react-router-dom';

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';

function App() {

  const [listOfCountries, setListOfCountries] = useState([])

  // setListOfCountries(countries)
  // console.log(countries);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div className="row">
        <CountriesList listOfCountries={countries}/>
        {/* <CountryDetails /> */}
        {/* I LEFT THE WORK HERE _____ */}
        <Routes>
        <Route path="/:id" element={ <CountryDetails someData={countries} /> } />
        </Routes>  
      </div>
      </div>

    </div>
  );
}

export default App;
