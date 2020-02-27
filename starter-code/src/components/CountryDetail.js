import React from 'react'
// import {CountryList, countryList} from './CountryList'
import countries from './../countries.json'
import {Link} from 'react-router-dom'

const CountryDetail = (props) => {

  const { countryId } = props.match.params

  const getCountryById = (countryId) => {
    const result = countries.find((country) => country.cca3 === countryId)

    return result
  }

  const countryToDisplay = getCountryById(countryId)

  return (
    <div class='list-group'>
      <h1>{countryToDisplay.name.common}</h1>
      <table class='table'>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countryToDisplay.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{countryToDisplay.area} km
            <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>{countryToDisplay.borders.map((borderCountry) => {
                return (
                  <ul>
                    <li>
                      <Link to={`/${borderCountry}`}>
                        {countries.map((country) => {
                          if (country.cca3 === borderCountry) {
                            return <p>{country.name.common}</p>
                          }
                        })}
                      </Link>
                    </li>
                  </ul>                                                                                                                                                                                                                                                                          
                )})}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail

{/* <p>{countryToDisplay.borders.map((borderCountry) => {
        return (
        <ul>
          <li>
            <Link to={`/${borderCountry}`}>
              {borderCountry}
            </Link>
          </li>
        </ul>                                                                                                                                                                                                                                                                          
        )})} */}