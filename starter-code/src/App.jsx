import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetail from "./view/CountryDetail"
import countries from "./countries"
import CountryList from './components/CountryList';


function App() {
  return (
    <div className="App">
      <h1 className="nav-bar-header">WikiCountries</h1>

      <div className="col-5">
        <CountryList countries = {countries}/>
      
      </div>

      <Router>
      <Switch>
      <Route exact path = "/" />
      <Route path = "/country/:id" component = {CountryDetail} />
      </Switch>

      </Router>
    </div>
  );
}

export default App;
