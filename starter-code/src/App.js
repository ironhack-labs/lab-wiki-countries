import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Countries from "./Countries";

class App extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <Countries />
      </div>
    );
  }
}

export default App;
