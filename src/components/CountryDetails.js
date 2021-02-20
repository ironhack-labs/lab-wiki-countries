import React from 'react'
import { Link } from 'react-router-dom'

function CountryDetails({match, countries}) {
    const { params } = match
    const id = params.cca3
    const filteredCountry = countries.find((country)=> country.cca3===id)
    const borders = filteredCountry.borders ? filteredCountry.borders.map((border) => { }) : 'none'
    
    return <div className='col-7'>
        <h1></h1>
        <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{filteredCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {filteredCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                        <ul>
                        </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
}

export default CountryDetails