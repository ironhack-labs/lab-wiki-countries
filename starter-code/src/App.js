import React from "react";
import "./App.css";
import AllCountries from "./components/AllCountries";
import CountryDetail from "./components/CountryDetail";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="main" className="row">
        <AllCountries />
        <Switch>
          <Route exact path="/country/:id" component={CountryDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
