import React from 'react'
import countries from './../countries.json'
import { Link } from 'react-router-dom'



export default function CountryDetails(props) {

    console.log(props.match.params.cca3)
    const country = countries.find(country => country.cca3 === props.match.params.cca3)
    console.log(country)

    return (
        <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {country.borders.map(border => <li key={border}><Link to={`/${border}`}>{border}</Link></li> )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
