import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList'
import CountryDetails from "./Components/CountryDetails";

import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path="/" component={CountriesList}></Route>
      <Route exact path="/countrydetails/:identifier" component={CountryDetails}></Route>

    </div>

  );
}

export default App;
