import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import CountryDetails from "./components/ContryDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Countries />
      <CountryDetails />
    </div>
  );
}

export default App;
