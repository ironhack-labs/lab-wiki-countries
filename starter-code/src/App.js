import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import CountryDetails from "./components/CountryDetails.js";
import { Switch, Route } from "react-router-dom";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar />  
        <div className = "container">
        <Content />
        <Route exact path ="/:cca3" component={CountryDetails} />
        </div>
      </div>
    );
  }
}
