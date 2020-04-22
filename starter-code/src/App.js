import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About.js";
import Countries from "./countries.json";
import Country from "./Components/Country.js";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
          >
            <div>Wikicountries</div>
          </nav>

          <div className="columns">
            <div className="column">
           
              {Countries.map((item, index) => {
                return (
                  <div className="card">
                    <img src={`https://www.countryflags.io/${item.cca2}/flat/64.png`}/>
                    <a 
                      key={index}
                      href={item.cca3}>
                      <div>{item.name.official}</div>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="column">
              <Route exact path="/:id" component={Country} />
            
            </div>
          </div>
        </div>
    
      </Router>
    );
  }
}

export default App;
