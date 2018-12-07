import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'



class CountryDetails extends Component {
  render() {
      console.log(this)
      let country = countries.map((country)=>{
          if(this.props.match.params.cca3 === country.cca3){
          
            return (
                <div>
                    <h1> {country.name.official}</h1>
                    <div><h4>Capital:</h4> {country.capital}</div>
                    <div><h4>Area:</h4> {country.area}</div>
                    <div><h4>Borders:</h4><li>{country.borders}</li></div>
                </div>
            )
          }

      })
    return (
      <div>
          {country}
      </div>
    );
  }
}

export default CountryDetails;
