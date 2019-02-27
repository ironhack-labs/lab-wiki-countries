import React, { Component } from 'react';
import countries from './countries';
import {NavLink} from "react-router-dom";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5  stylos"  >
              <div className="list-group">
                {
                  countries
                    .map((el,index)=>{
                      return(
                        <NavLink
                          className="list-group-item list-group-item-action"
                          key={index}
                          to={`/countrydetail/${el.cca3}`}
                        >
                          {el.name.common}
                        </NavLink>
                      )
                    })
                }
              </div>
            </div>
            <Router/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
