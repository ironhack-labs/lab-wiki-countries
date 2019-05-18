import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-container">
        <CountryList />
        <Route exact path="/:id" component={CountryDetail} />
        </div>
      </div>
    );
  }
}

export default App;
