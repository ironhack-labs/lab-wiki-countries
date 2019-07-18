import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Data from '../countries.json'


const CountryDetail = () => {
 
  return (
    <div className="col-7">
      <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="country/AND">Andorra</a></li>
                      <li><a href="country/BEL">Belgium</a></li>
                      <li><a href="country/DEU">Germany</a></li>
                      <li><a href="country/ITA">Italy</a></li>
                      <li><a href="country/LUX">Luxembourg</a></li>
                      <li><a href="country/MCO">Monaco</a></li>
                      <li><a href="country/ESP">Spain</a></li>
                      <li><a href="country/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
  )
}

export default CountryDetail
