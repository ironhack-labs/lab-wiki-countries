import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
