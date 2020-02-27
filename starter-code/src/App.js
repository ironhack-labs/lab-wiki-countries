import React from 'react';
import logo from './logo.svg';
import './App.css';

import Countries from "./countries.json"
import { Link, Route } from "react-router-dom";
import  CountryDetail  from "./components/CountryDetail"



function App() {
  
  
  return (
    <div className="App">
      
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>

        <div className="container">
        <div className="row"> 
          <div className="col-5 list-scroll">
            <div className="list-group"> 

      {
        Countries.map( (country) => {
          return (

            <Link to={`/${country.cca3}`} className={"list-group-item list-group-item-action"}>
              <div>

              {country.flag} {country.name.common}
              </div>

            </Link>

          )
          }

        )
      }
      </div>
      </div>
      
            <Route exact path="/:countryId" component={CountryDetail} />
      
      
      </div>
      </div>


    </div>


  );
}

export default App;
