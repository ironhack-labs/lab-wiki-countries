import React from 'react';
// import logo from './logo.svg';
import {CountryList} from "./components/CountryList";
import { Route , Switch } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

import './App.css';

function App() {
  return (
    <div className="App" >
      <CountryList/>
      <Switch>
        {/* Switch renders the first child that matches the path */}
        <Route exact path="/countrydetails/:name" component= {CountryDetails} />
        </Switch>
    </div>
  );
}

export default App;
