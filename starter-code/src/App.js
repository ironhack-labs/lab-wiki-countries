import "bootstrap/dist/css/bootstrap.css";
import "./App.css"
import countries from "./countries.json";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryDetail from "./components/CountryDetail.js";

//Styles
const col5Style = {
  maxHeight: "90vh",
  overflow: "scroll"
};

export default class App extends Component {
  render() {
    return (
      
          <div className="container">
            <div className="row">
              <div className="col-5" style={col5Style}>
                <div className="list-group">
                  {countries.map(country => {
                    return (
                      <a key={country.cca3}>
                        <Link to={`/countryDetail/${country.cca3}`}>
                          <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}></img> {country.name.common}
                        </Link>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        
      
    );
  }
}
