import React, { Component } from 'react';
import countries from './countries.json';
import {Link} from 'react-router-dom'


export default class CountryDetail extends Component {
  state = {
    countries : [...countries]
  }


  render() {
    let coutryFiltered = this.state.countries.filter((country) => country.cca3 === this.props.match.params.cca3);
      
    let borders = coutryFiltered[0].borders.map((border,i) => {
        let nameCountryBorder = this.state.countries.filter((country) => country.cca3 === border);
        return <li key={i} ><Link to={border}>{nameCountryBorder[0].name.common}</Link></li>
    })

    const tdStyle = {
      width: '30%'
    } 
    
    return (
      <React.Fragment>
        <div className="col-7">
        <h1>{coutryFiltered[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Capital</td>
                  <td>{coutryFiltered[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{coutryFiltered[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </React.Fragment>
    )
  }
}
