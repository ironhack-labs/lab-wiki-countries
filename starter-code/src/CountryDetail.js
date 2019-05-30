import React, { Component } from 'react'
import countries from "./data/countries.json";
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    findCountry = (id)=>{
        return countries.filter(country=>{
            return country.cca3 === id
         })[0]
    }
    render() {
        let { id } = this.props.match.params
        let filteredCountry = this.findCountry(id)

    return (
      <div>

            <h1>{filteredCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{filteredCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{filteredCountry.area}km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {filteredCountry.borders.map(border=> {
                       return  <li><Link to={border}>{this.findCountry(border).name.common}</Link></li>
                    }
                    )}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

    )
  }
}
export default CountryDetail 