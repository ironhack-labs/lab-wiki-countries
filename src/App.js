import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList"
import CountryDetail from "./components/CountryDetail";


function App() {
  return (
    <div className="App">
      <h1>WikiCountries</h1>
      <div class="row">
        <CountriesList />
        <Switch>
          <Route exact path="/countries/:cca3" component={CountryDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
