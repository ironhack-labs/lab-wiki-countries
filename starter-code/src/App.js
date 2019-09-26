import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import countries from "./countries.json";
import { CountryList } from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div
            className='col-5'
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <CountryList />
          </div>
          <Switch>
            <Route exact path='/:id' component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
