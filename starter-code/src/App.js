import React from "react";
import "./App.css";
import countries from "./countries.json";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";

// const foundCountry = countries.find(el => {
//   return el.cca3 === cca3;
// });

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: "scroll" }}
        >
          <CountryList />
        </div>
        <div className="col-7">
         <Switch> 
          <Route exact path= "/CountryDetail/:cca3" component = {CountryDetail} />
         </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
