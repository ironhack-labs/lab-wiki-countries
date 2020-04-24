import React , { Component } from 'react';
import {Link} from "react-router-dom";
import countries from '../countries.json';
import '../App.css';


class ListCountries extends Component {

  handleListCountries = () => {
    return countries.map((country, index) => {
      return (
        <div className='LinkCountryContainer' key={country.cca3}>
          <Link className='LinkCountry' to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
        </div>
      )
    })
  }
  render(){
    return(
      <div className='ListCountries'>
        {this.handleListCountries()}
      </div>
    )
  }
}

export default ListCountries;