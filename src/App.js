import React , { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import HomePage from "./components/HomePage";
import CountryDetails from "./components/CountryDetails";
import Tests from "./components/Tests";




function App() {

  return (


    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container-fluid row no-gutters m-0 p-0">
            <CountriesList/>
          
            <Switch>
              <Route path="/details/:countryCode" component={CountryDetails}/>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>


  );
}

export default App;
