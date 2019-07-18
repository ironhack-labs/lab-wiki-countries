import React, { Component } from "react";
import "./App.css";
import Countries from "./components/Countries";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Wikicountries</h1>
        <Countries />
      </div>
    );
  }
}

export default App;
