import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";

import Router from "./Router";

class App extends Component {
  state = {
    countries
  };
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
