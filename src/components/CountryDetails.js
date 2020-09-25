import React from 'react'
import countries from "../countries.json";
import {Link} from "react-router-dom";

export default function CountryDetails(props) {
    const countryDetails = countries.find(country => {
        return country.cca3 === props.match.params.id;
    })
    const borders = countryDetails.borders.length > 0 ? countryDetails.borders.map((border, index) => {
      const borderCountries = countries.find(country => {
        return country.cca3 === border;
      })
      return (<li><Link to={`/${border}`}>{borderCountries.name.common}</Link></li>)
    }) : <p>none</p>
    return (
<div className="col-7">
    <h1>{countryDetails.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{countryDetails.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryDetails.area} km
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
    )
}
