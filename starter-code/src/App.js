import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import * as data from "./countries.json";
// import CountryList from "./components/Navbar";
// import Countrydetails from "./components/Navbar";

let countries = data.default;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container countries={countries} />
    </div>
  );
}

export default App;
