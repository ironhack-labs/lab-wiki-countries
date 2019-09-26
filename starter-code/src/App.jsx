import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetail from "./view/CountryDetail"
import countries from "./countries"
import CountryList from './components/CountryList';


function App() {
  return (
    <div className="App">
        <Router>
      <h1 className="nav-bar-header">WikiCountries</h1>
<div className="row">
      <div className="col-5">
        <CountryList countries={countries}/>
      
      </div>
      <div className="col-7">
      <Switch>
      <Route exact path="/" />
      <Route path="/country/:id" component = {CountryDetail} />
      </Switch>

      </div>

</div>

      </Router>
    </div>
  );
}

export default App;
