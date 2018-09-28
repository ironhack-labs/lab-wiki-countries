import React, { Component } from 'react';
import allCountries from './countries.json';
import { Link } from 'react-router-dom';
import '../App.css';
import { withRouter } from 'react-router'
import {browserHistory} from 'react-router'

class Country extends Component {
  constructor(props){
    super(props)
  }


  render() {
    // const countryName = allCountries.map((country, index)=>{
    //  return <li key={country.cca3} className="country_list"> <Link className="oneCountry" to={`/country/${country.cca3}`} >{country.name.common}</Link> </li>
    //
    // })



    return (
      <nav>

        <ul className="country_list">
        {allCountries.map((country, index)=>{
          return(
            <div class="mycountry" key={country.cca3}>
              <Link className="oneCountry" key={index} to={`/country/${country.cca3}`} >{country.name.common}</Link>
            </div>
          )
        })}
        </ul>


      </nav>
    );
  }
}

export default withRouter(Country);
