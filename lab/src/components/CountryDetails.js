import React from 'react'
import countries from './countries.json'
import { Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


const CountryDetails = (props) => {
    const params = props.match.params.cca3
    const country = countries.find(elm => elm.cca3 === params)
    console.log(country.name.common)
    return (
      <div className="col-7">
            <h1>{country.name.common}{country.flag}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td >Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.name.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                        <td>
                            {country.borders.map((borderCountry, index) => {
                                const border = countries.find(elm => elm.cca3 === borderCountry)
                                return (
                                    <ul>
                                        <li><Link key={index} to={`${border.cca3}`}>{border.name.common}{border.flag}</Link></li>
                              </ul>
                          )
                      })}      
                  <ul>

                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
    )
}

export default CountryDetails