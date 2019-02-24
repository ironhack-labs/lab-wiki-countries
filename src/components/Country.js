import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Country extends Component {
  // necessary information of objects, example france

	// 	"name": {
  // 		"common": "France",
  // 	},
	// 	"cca3": "FRA",
	// 	"capital": ["Paris"],
	// 	"translations": {
	// 		"spa": {"common": "Francia"},
	// 	"borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
	// 	"area": 551695,
	// 	"flag": "\ud83c\uddeb\ud83c\uddf7"
  

  render() {
    const {countries} = this.props
    const cca3 = this.props.match.params.cca3;
    const obj = countries.filter(country => country.cca3 === cca3);
    const {translations, capital, area} = obj[0];
    let borders = obj[0].borders;
    borders = borders.map(cca3 => countries.filter((i) => i.cca3 === cca3))
    
    return (
      <div>
            <h1>{translations.spa.common}</h1>
            <table >
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {borders.length>0?
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {borders.map((country, key) => {
                      return (<li key={key}><Link to={country[0].cca3}>{country[0].translations.spa.common}</Link></li>)
                    })}
                    </ul>
                  </td>
                </tr>
                : <p>No countries near</p>}
              </tbody>
            </table>
          </div>
    )
  }
}

export default Country;