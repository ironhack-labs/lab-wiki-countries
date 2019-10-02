import React, { Component } from 'react';
import './App.css';
import countries from './countries';
import Country from './Country';
import CountryDetail from './CountryDetail';
import { BrowserRouter } from "react-router-dom";
console.log(countries)
class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    }


  }
  render() {
    return (
      <div className="App">

        <div className="col-5">
          <Country countries={this.state.countries}></Country>
        </div>
        <div className="col-7"
        >


          <BrowserRouter exact path='/:country' render={props => {
            console.log("holi")
            let selectedCountry = this.state.countries.filter(country => {
              return country.cca3 === props.match.params.country;
            })

            return (
              <CountryDetail {...selectedCountry[0]}></CountryDetail>
            )
          }}></BrowserRouter>

        </div>


      </div>
    );
  }
}

export default App;