import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';

class CountryList extends Component {
  state={
    listOfCountries: countries,
    originalListOfCountries: countries,
  }
  allCountries = () => {
    return this.state.listOfCountries.map((country)=>{
      return <Link to={`/country/${country.cca3}`}  className="list-group-item list-group-item-action">{country.flag}{country.name.official}</Link>
    })
}
 
  render() {
    return (
      <div>
          
          
         

         <div className="list-group">

         {this.allCountries()}
           
          </div>
      
      </div>
    );
  }
}

export default CountryList;