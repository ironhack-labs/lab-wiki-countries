import React, { Component } from 'react'
import countries from "../countries.json";
import Link from 'react-router-dom/Link';


class CountryDetails extends Component {
  

  render () {
      const country = countries.find(country => country.cca3 === this.props.match.params.cca3);
      console.log(country)
      return (
          <div>
      
          <h1>{country.name.common}</h1>
          <hr/>
          <h5>Capital {country.capital}</h5>
          <hr/>
          <h5>Area {country.area} km2</h5>
          <hr/>
          <td>borders </td>
          <td>
            <ul>

            {country.borders.map((e) => {
             const completeName = countries.find(country => country.cca3 ===  e)
                return (
                  <li><Link to={e}>{completeName.name.common}</Link></li>
                )
            }) 

            }
            </ul>
          </td>

            </div>
      )
  }
}

export default CountryDetails;