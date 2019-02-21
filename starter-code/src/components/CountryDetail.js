import React, { Component } from 'react'
import '../App.css';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

class CountryDetail extends Component {

  render() {
    
    const country = countries.find(country => {
      return country.cca3 === this.props.match.params.cca3
    })

    return (
      <div>
        <h1>{country.name.official}</h1>
        <div><p>{country.capital}</p></div>
        <div><p>{country.area}</p></div>
        <div>
            <p>
            <ul>
                {country.borders.map((country, index) =>{
                  return <li key={index}><Link to={`/countries/${country}`}>{country}</Link></li>
                })}
            </ul>
            </p>
        </div>
      </div>
    )
  }
}

export default CountryDetail