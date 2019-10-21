import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ListCountries from "./components/listCountries";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{'max-height': '90vh', overflow:'scroll', 'text-align': 'left'}}>
            <div className="list-group">
              <ListCountries />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
