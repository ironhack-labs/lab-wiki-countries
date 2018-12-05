import React, { Component } from 'react'
import countries from '../../countries.json'
import './CountryDetail.css';
import { Link } from 'react-router-dom';


export default class CountryDetail extends Component {

  filterCountries = (countries, countrycca32) => {
    return countries.filter((country) => {
      return country.cca3 === countrycca32
    })
  }

  render() {

    let chosenCountry = this.filterCountries(countries, this.props.match.params.cca3)
    console.log(chosenCountry)
    return (
      <div className="detail-container">
        <h1>{chosenCountry[0].name.common}</h1>
        <div className="capital">
          <h4>Capital</h4>
          <h4>{chosenCountry[0].capital}</h4>
        </div>
        <div className="area">
          <h4>Area</h4>
          <h4>{chosenCountry[0].area} Km2</h4>
        </div>
        <div className="borders">
          <h4>Borders</h4>
          <ul>
            {chosenCountry[0].borders.map(function (border) {
            
              return <li>
                <Link to={`/countrydetail/${border}`} style={{ textDecoration: 'none' }}>
              {border}
              </Link>
              </li>
            })}
            
          </ul>
        </div>
      </div>
    )
  }
}
