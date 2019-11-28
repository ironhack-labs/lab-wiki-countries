import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import Countries from "./Countries";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Countries />
          <Route exact path="/:id" component=
          {CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
