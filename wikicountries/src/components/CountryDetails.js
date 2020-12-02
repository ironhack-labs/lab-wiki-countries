import React from "react"
import countries from './countries.json'
import { Link } from "react-router-dom"

const CountryDetails = (props) => {

    const params = props.match.params.cca3
    const country = countries.find(elm => elm.cca3 === params)
    

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table class="table">
            <thead></thead>
              <tbody>
                <tr>
                <td>Capital</td>
            <td>{country.capital}</td>
            </tr>
                <tr>
                  <td>Area</td> 
                  <td>{country.area} km</td>
                  </tr>
                  <tr>
                  <td>Borders</td>
                  <td>
            {country.borders.map((borderCountry, index) =>{
                const border = countries.find(elm => elm.cca3 === borderCountry)
                return (
                <ul>
                    <li><Link key={country} to={`${border.cca3}`}>{border.flag}{border.name.common}</Link></li>
                </ul>
                )})}
                </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}


export default CountryDetails