import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import Countries from "./countries.json";
import Navbar from './components/Navbar.js';
import CountrieDetail from './components/CountrieDetail.js'

function App() {

  return (
    <div className="App">
      <div className="navbar bg-primary mb-1"><h2 className="text-light">Wiki Countries</h2></div>

      
      <div className="row ">
        <div className="col-5 pl-4">
          <Navbar countries={Countries}/>
        </div>
        <div className="col-7 ">
            <Route exact path='/:id' render={
            props => <CountrieDetail {...props} countries={Countries} /> 
              } 
            />
        </div>
      </div>
      
    </div>
  );
}

export default App;
