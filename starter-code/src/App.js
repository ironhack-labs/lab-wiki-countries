import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountryList />
          <Route exact path="/:id" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
