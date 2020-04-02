import React from "react";
import "./App.css";
import CountryDetail from "./CountryDetail";
import Details from "./Details";
import {Switch,  Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand text-light" href="#!">WikiCountries</a>
    </nav>
    <div className="home">
    <CountryDetail></CountryDetail>
   <Switch>
     <Route exact path= '/:id' component={Details}/>
   </Switch>
    </div>
    </div>
  );
}

export default App;
