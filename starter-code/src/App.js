import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import CountryList from "./Components/CountryList";
import CountryDetail from "./Components/CountryDetail";

function App() {
  return (
    <div className="CountryWiki">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountryList />
          <Route exact path="/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
