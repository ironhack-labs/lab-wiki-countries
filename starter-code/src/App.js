import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import { Route, Link } from "react-router-dom";
import countries from "./countries.json";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  
  render() {
    //console.log(countries)
    
    const countryList = countries.map((country) => {
      //console.log(country.name.official);
      //console.log(country.cca3)
      const cca3LowLetter = country.cca2.toLowerCase();
       
      return (                                             
        <div className="container">
          <div className= "row">
            <img src = {`https://www.countryflags.io/${cca3LowLetter}/flat/64.png`} alt = "countryflag"/>
            <div className="list-group">    
              <Link to= {`/${country.cca3}`} key={country.cca3} className="list-group-item list-group-item-action">
              {country.name.common}       
              </Link>
            </div>          
          </div>
        </div>      
      )       
    });
    
    

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container ml-5 mr-5">
          <div className= "row">
            <div className="col-5 ">                          
              {countryList}          
            </div>
            <div className="col-7">
              <Route exact path="/:countryCode" component={CountryDetail} />
            </div>          
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
