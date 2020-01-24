import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetail from "./components/CountryDetail";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
        <div className="container border border-secondary">
      <Navbar />
          <div className="row float countryAndDetails ">
      <Dashboard/>
      <Switch>
            <Route exact path="/:id" component={CountryDetail} />
      </Switch>
          </div>
        </div>
    </div>
  );
};

export default App;
