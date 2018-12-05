import React, { Component } from 'react'
import countries from "../countries.json";
import { Link, Route } from 'react-router-dom';


export default class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries,
    };
    
  }

  render() {
    const country = countries.find(country => country.cca3 === this.props.match.params.cca3)
    console.log(country)
    return (
      <div>
        
        <div className="col-7">
              <h1>{country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td >Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{country.area}
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        
                        {country.borders.map((e) => (
                 
                       <li><Link to={e}>{e}</Link></li>
              
                        ))}
                     
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


      </div>
    )
  }
}
