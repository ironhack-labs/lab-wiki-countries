import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import CountryDetails from "../src/Components/CountryDetail";
import Countries from "./countries.json";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [...Countries]
    };
  }

  render() {
    return (
      <div className='App'>
        <div>
          <nav className='navbar navbar-dark bg-primary mb-3'>
            <div className='container'>
              <a className='navbar-brand' href='/'>
                WikiCountries
              </a>
            </div>
          </nav>
          <div className='container'>
            <div className='row'>
              <div className='col-5'>
                <div className='list-group'>
                {this.state.countries.map((country, idx)=>{
                  return <Link className='list-group-item list-group-item-action' key={idx} to={country.cca3}>{country.flag} {country.name.common} </Link>
                })}
                 
                </div>
              </div>
              <Route
              exact
              path="/:country"
              render={props => {
                let countryCode = props.match.params.country;
                console.log(countryCode)
               let chosenCountry= this.state.countries.find(country=>country.cca3 === countryCode)
               console.log(chosenCountry.borders)
               let frontiers= chosenCountry.borders.map(code=>{
                return this.state.countries.find(country=> country.cca3===code)
               })
               console.log(frontiers)
                return (
                  <CountryDetails
                    country={chosenCountry}
                    borders={frontiers}
                  ></CountryDetails>
                );
              }}
            />
              </div>
          </div>
        </div>
      </div>
    );
  }
}
