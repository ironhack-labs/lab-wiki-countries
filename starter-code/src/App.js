import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";
import WikiCountries from "./WikiCountries"
import CountryDetail from "./CountryDetail"

const NavBar = () => {
  return (<nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <Link className="navbar-brand" to="/">WikiCountries</Link>
    </div>
  </nav>)
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
      <WikiCountries />
      <Route exact path="/:country" component={CountryDetail} />

        </div>
      </div>

    </div>
  );
}

export default App;
