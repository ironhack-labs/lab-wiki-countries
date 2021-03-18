import CountriesList from "./components/CountriesList";
import React from "react";

import { Switch, Route } from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import CountryDetails from "./components/CountryDetails"


function App() {
  return (
    <div className="App">
     <h1>Lets Go</h1>
     <NavBar />
     <CountriesList />
     <Switch>
       <Route exact path='/:cca3' component={CountryDetails}  />
     </Switch>
    </div>
  );
}

export default App;
