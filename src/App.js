import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>

      <div className="container">
        <div className="row">
          
          <CountriesList/>
          <div>
            <Route component={CountryDetails} path='/:id' exact />
          </div>
          
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
