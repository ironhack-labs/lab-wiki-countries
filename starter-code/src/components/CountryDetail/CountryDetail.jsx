import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";

class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      country: {}
    };
  }

  findCountry(id, array) {
    for (let i = 0; i < array.length; i++) {
     if (array[i].cca3 == id) {
       return array[i]
      }
    }
  }

  hasBorders(country) {
  if (country.borders.length) {return true} else {return false}
  }


  render() {
    const countryId = this.props.match.params.id;
    const countries = this.props.countries;
    const country = this.findCountry(countryId, countries);

    return (
      <div className="text-left p-5">
      {country && ( 
        <div>
        <h3>{country.name.common} <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.cca3}/></h3>
        <br/>
        <h3>Capital: {country.capital[0]}</h3>
        <br/>
        <h3>Area: {country.area} km2</h3>
        <br/>
        {this.hasBorders(country) && (
        <ul className='list-group pl-5'> <h4>Borders:</h4>
        {country.borders.map(border => {
          const country = this.findCountry(border, countries);
          const name = country.name.official;
          return <li className='mb-2'>
        <Link to={`/${border}`}>{name}</Link></li>})}
        </ul> )}
        
      </div>)}
      </div>
    );
  }
}

export default CountryDetail;
