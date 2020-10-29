import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import countries from '../countries.json'



export default class CountriesList extends Component {


  render() {

    
    return (
      <div>
        {countries.map((country, index) => {
          return (
            <Link class="list-group-item list-group-item-action" key={index} to={`/country/${country.cca3}`}>
              <p>{country.flag}  {country.name.common}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
