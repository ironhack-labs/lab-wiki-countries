

import React, { Component } from 'react';
import countries from '../countries.json';
import '../App.css';
//import { Link } from 'react-router-dom';

class CountryList extends Component {
    state = {
      countries: countries
    }

  thecountries = () => {
    let list = this.state.countries.map((country) => {
      return ( 
        <a key={country.cca3} className="list-group-item list-group-item-action" href="/ABW">{country.flag}{country.name.common}</a>
        )
    })
    return list;
  }

  render() {
    return(
      <div className="showCountries">
          <div className="col-5 countrylist">
            <div className="list-group">
              {this.thecountries()}
            </div>
            
          </div>
        
      </div>
    )
  }
  
}

export default CountryList;
