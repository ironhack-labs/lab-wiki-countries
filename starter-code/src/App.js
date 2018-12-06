import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import country from "./countries.json"

class App extends Component {
  
 state = {country: country} 

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
            
              { this.state.country.map((country,index) => 

                <Link className="list-group-item list-group-item-action" to="/ABW"> {country.flag}{country.name.common}</Link>) 
      }
            </div>
          </div>
          </div>
          </div>

      </div>
    );
  }
}

export default App;
