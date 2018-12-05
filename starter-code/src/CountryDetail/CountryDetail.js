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
    const country = countries.find(country => country.cca3 === this.props.match.params.cca3
)
   
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
                        
                     
                     {country.borders.map((e) => {
                  const completeName = countries.find(country => country.cca3 ===  e)
                 return (
                 <li><Link to={e}>{completeName.name.common}</Link></li>
               )
                  })

                 }
                     
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
