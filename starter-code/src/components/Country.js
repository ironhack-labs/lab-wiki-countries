import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";

import '../App.css';

class Country extends Component {

  
  getCountryName = () => {
    let [countrySelect] = countries.filter(
    (country) => country.cca3 === this.props.match.params.id
  );
  return countrySelect.name.common;
  }

  getCountryCapital = () => {
    let [countrySelect] = countries.filter(
    (country) => country.cca3 === this.props.match.params.id
  );
  return countrySelect.capital;
  }

  getCountryArea = () => {
    let [countrySelect] = countries.filter(
    (country) => country.cca3 === this.props.match.params.id
  );
  return countrySelect.area;
  }

  getCountryBorders = () => {
    let [countrySelect] = countries.filter(
      (country) => country.cca3 === this.props.match.params.id
    )
    return countrySelect.borders;
  }

  render(){
    
    return(
      <div className='Country'>
        <h1>{this.getCountryName()}</h1>
        <div className="Info Country-detail">
        <span>Capital</span>
          <span>{this.getCountryCapital()}</span>
        </div>
        <div className="Info Country-detail">
        <span>Area</span>
        <span>{this.getCountryArea()} km²</span>
        </div>
        <div className="Info" >
          <span className="Borders">Borders</span>
        <ul>
        {this.getCountryBorders().map((country, index) => {
          let [filterCountry] = countries.filter((c) => c.cca3 === country)
          return(
            <li key={index}>
              <Link to={`/countries/${filterCountry.cca3}`} >{filterCountry.name.common}</Link>
            </li>)
              })
        }
        </ul>
      </div>
    </div>
    )
  }
}

export default Country; 