import React from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <HomePage></HomePage>
      <CountryDetailsPage></CountryDetailsPage>
    </div>
  );
}

export default App;
